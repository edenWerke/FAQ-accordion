const section = document.querySelectorAll('.section');
section.foreach((icon, index) => {
            let question = icon.querySelector('.question')
            question.addEventListener('keydown',(event)=>{
                
            })
        }











        //     const section = document.querySelectorAll('.section');
        //     section.forEach((icon, index) => {
        //         let question = icon.querySelector('.question')
        //         question.addEventListener('keydown', (event) => {
        //             switch (event.key) {
        //                 case 'ArrowDown':
        //                     event.preventDefault()
        //                     if (index < section.length - 1) {
        //                         section[index + 1].querySelector('.question').focus();
        //                     } else {
        //                         section[0].querySelector('.question').focus();
        //                     }
        //                     break;
        //                 case 'ArrowUp':
        //                     event.preventDefault()
        //                     if (index > 0) {
        //                         section[index - 1].querySelector('.question').focus();
        //                     } else {
        //                         section[section.length - 1].querySelector('.question').focus();
        //                     }
        //                     break;
        //                 case 'Enter':
        //                     toggleAnswer();
        //                     break;
        //                 case ' ':
        //                     toggleAnswer();
        //                     break;
        //                 default:
        //                     break;
        //             }
        //         })
        //         let answer = icon.querySelector('.answer');
        //         let image = icon.querySelector('img');

        //         function toggleAnswer() {
        //             if (answer.style.display === "none") {
        //                 answer.style.display = 'block',
        //                     image.src = "assets/images/icon-minus.svg";
        //             } else {
        //                 answer.style.display = 'none'




        //                 image.src = "assets/images/icon-plus.svg"
        //             }
        //         }
        //         question.addEventListener('click', toggleAnswer)
        //     })
        // })