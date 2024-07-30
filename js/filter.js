/* Start Filter */
    let field = document.querySelector('.highrest_rate');
    let col = Array.from(field.children);

    function FilterProduct() {
        for (let i of col) {
            const name = i.querySelector('small');
            const pro_name = name.textContent;
            i.setAttribute("data-category", pro_name)
        }

        let indicator = document.querySelector('.indicator').children;

            for (let i = 0; i < indicator.length; i++) {
                
                indicator[i].onclick = function (e){
                    e.preventDefault();
    
                    for (let j = 0; j < indicator.length; j++) {
                        indicator[j].classList.remove('category-active');
                    }
    
                    this.classList.add('category-active')
                    const displayItem = this.getAttribute('data-filter');
    
                    for (let h = 0; h < col.length; h++) {
                        col[h].style.transform = "scale(0)";
                        setTimeout(() => {
                            col[h].style.display = "none";
                        }, 500);
                        
    
                        if(( col[h].getAttribute('data-category') == displayItem ) || displayItem == "all"){
                            col[h].style.transform = "scale(1)";
                            setTimeout(() => {
                                col[h].style.display = "block";
                            }, 500);
                        }
                    }
                }
                
            }
        
    }

    FilterProduct() ;
/* End Filter */