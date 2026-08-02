import { useEffect } from 'react';

const SECTION_IDS = ['hero', 'about', 'work', 'skills', 'contact'] as const;

function getSections(): HTMLElement[] {
	return SECTION_IDS.map((id) =>
		document.querySelector<HTMLElement>(`[data-section="${id}"]`)
	).filter((el): el is HTMLElement => Boolean(el));
}

function navOffset() {
	return 64;
}

/**
 * Smooth section jumps on wheel/touch when at a section edge.
 * Tall sections (e.g. experience) still scroll freely inside.
 * Viewport-sized sections allow a little travel first so hero parallax can play.
 */
export function useSectionSnap(enabled = true) {
	useEffect(() => {
		if (!enabled) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let locked = false;
		let touchStartY = 0;
		let acc = 0;

		const jumpTo = (el: HTMLElement) => {
			locked = true;
			acc = 0;
			const top = el.offsetTop - navOffset();
			window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
			window.setTimeout(() => {
				locked = false;
			}, 850);
		};

		const currentIndex = (sections: HTMLElement[]) => {
			const y = window.scrollY + navOffset() + 8;
			let idx = 0;
			for (let i = 0; i < sections.length; i++) {
				if (sections[i].offsetTop <= y) idx = i;
			}
			return idx;
		};

		const trySnap = (deltaY: number) => {
			if (locked || Math.abs(deltaY) < 20) return false;

			const sections = getSections();
			if (!sections.length) return false;

			const idx = currentIndex(sections);
			const current = sections[idx];
			const next = sections[idx + 1];
			const prev = sections[idx - 1];

			const top = current.offsetTop - navOffset();
			const bottom = top + current.offsetHeight;
			const viewBottom = window.scrollY + window.innerHeight;
			const scrolledIn = window.scrollY - top;
			const edge = 64;

			// Require a little progress so full-viewport sections (hero) can parallax
			const atBottom =
				viewBottom >= bottom - edge && scrolledIn > 48;
			const atTop = window.scrollY <= top + edge;

			if (deltaY > 0 && next && atBottom) {
				acc += deltaY;
				if (acc > 90) {
					jumpTo(next);
					return true;
				}
				return false;
			}

			if (deltaY < 0 && prev && atTop) {
				acc += Math.abs(deltaY);
				if (acc > 90) {
					jumpTo(prev);
					return true;
				}
				return false;
			}

			acc = 0;
			return false;
		};

		const onWheel = (e: WheelEvent) => {
			if (locked) {
				e.preventDefault();
				return;
			}
			if (trySnap(e.deltaY)) e.preventDefault();
		};

		const onTouchStart = (e: TouchEvent) => {
			touchStartY = e.touches[0]?.clientY ?? 0;
		};

		const onTouchEnd = (e: TouchEvent) => {
			const endY = e.changedTouches[0]?.clientY ?? touchStartY;
			const delta = touchStartY - endY;
			if (Math.abs(delta) < 50) return;
			// Touch: jump immediately at edges (no accumulation)
			acc = 100;
			trySnap(delta);
		};

		window.addEventListener('wheel', onWheel, { passive: false });
		window.addEventListener('touchstart', onTouchStart, { passive: true });
		window.addEventListener('touchend', onTouchEnd, { passive: true });

		return () => {
			window.removeEventListener('wheel', onWheel);
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchend', onTouchEnd);
		};
	}, [enabled]);
}
