import React from "react"
import "./style.css"

import BtnAction from "../../components/btnNext"
import ListFrame from "../../components/listFrame"

import frame01 from "../../assets/Frame01.png"
function ProductDetail(){
    return(
        <>
            <div className="product-details">
                <div className="images-side">
                    <div className="product-details-main-img">
                        <img src={frame01} alt="Produto a ser comprado" />
                    </div>
                    <div className="product-details-sec-img">
                        <img src={frame01} alt="Produto a ser comprado" />
                        <img src={frame01} alt="Produto a ser comprado" />
                        <img src={frame01} alt="Produto a ser comprado" />
                    </div>
                </div>
                <div className="info-side">
                    <h2>Nome do produto sendo na StoreIPIL</h2>
                    <div className="product-details-reference"><h3>Referência: <span>2345</span></h3></div>
                    <div className="product-details-price">
                        <h2>499.000,00Kz</h2>
                        <p>Preço com IVA incluído a taxa em vigor</p>
                    </div>
                    <div className="actions-side">
                        <div className="quantity">
                            <button>-</button><span>1</span><button>+</button>
                        </div>
                        <BtnAction content={"Adicionar ao carrinho"} />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="title">Produtos Relacionados</h2>
                <ListFrame />
            </div>
        </> 
    )
}

export default ProductDetail