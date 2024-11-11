
document.querySelectorAll('.muke-sli-two-container').forEach(container => {
    const slider = container.querySelector('.muke-sli-two-slider');
    const image1 = container.querySelector('.muke-sli-two-image1');
    let isDragging = false;
    slider.style.left = image1.offsetWidth / 2 + 'px';
    image1.style.clipPath = `inset(0 ${image1.offsetWidth / 2}px 0 0)`;

    function startDrag(e) {
        isDragging = true;
        container.classList.add('muke-sli-two-no-select'); // 禁止文本选中
    }

    function stopDrag(e) {
        isDragging = false;
        container.classList.remove('muke-sli-two-no-select'); // 恢复文本选中
    }

    function onDrag(e) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        let xPos;

        if (e.type === 'mousemove') {
            xPos = e.clientX - containerRect.left;
        } else if (e.type === 'touchmove') {
            xPos = e.touches[0].clientX - containerRect.left;
        }

        // 保持滑块在容器内
        xPos = Math.max(0, Math.min(xPos, containerRect.width));

        slider.style.left = xPos + 'px';
        image1.style.clipPath = `inset(0 ${containerRect.width - xPos}px 0 0)`;
    }

    // 鼠标事件
    slider.addEventListener('mousedown', startDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mousemove', onDrag);

    // 触摸事件
    slider.addEventListener('touchstart', startDrag);
    document.addEventListener('touchend', stopDrag);
    document.addEventListener('touchmove', onDrag);
});