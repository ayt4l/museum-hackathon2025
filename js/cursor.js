document.addEventListener('DOMContentLoaded', function() {
    
    const css = `
        body, html { cursor: none !important; }
        a, button, input, textarea, label, [role="button"], .btn, .button { cursor: none !important; }
        
        #my-custom-cursor {
            position: fixed;
            top: 0; left: 0;
            z-index: 999999;
            pointer-events: none;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate3d(-50%, -50%, 0);
            transition: width 0.2s ease, height 0.2s ease, background-color 0.2s, border 0.2s;
            width: 40px;
            height: 40px;
            background-color: rgba(56, 97, 190, 1);
            border: 0px solid #3861be;
        }

        #my-cursor-dot {
            border-radius: 50%;
            transition: all 0.2s;
            width: 20px;
            height: 20px;
            background-color: #3861be;
        }

        #my-custom-cursor.hovered {
            width: 20px;
            height: 20px;
            background-color: rgba(56, 97, 190, 1);
            border: 0px solid #3861be;
        }
        
        #my-custom-cursor.hovered #my-cursor-dot {
            width: 2px;
            height: 2px;
            background-color: #3861be;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);

    const cursor = document.createElement('div');
    cursor.id = 'my-custom-cursor';
    const dot = document.createElement('div');
    dot.id = 'my-cursor-dot';
    cursor.appendChild(dot);
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', moveCursor);

    const addHover = () => cursor.classList.add('hovered');
    const removeHover = () => cursor.classList.remove('hovered');

    const targets = 'a, button, input[type="submit"], input[type="button"], [role="button"], .btn, .button, .cta, .elementor-button';
    
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest(targets)) {
            addHover();
        }
    });

    document.body.addEventListener('mouseout', (e) => {
        if (e.target.closest(targets)) {
            removeHover();
        }
    });
});