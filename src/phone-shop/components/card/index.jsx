
import css from "./index.module.css";
export function Card({name,price,image,id,onChangephoneDetail,onAddSanpham}){
    return(
        <>
         <div className={css.card}>
            <div className={css["card-img"]}>
                <img src={image}/>
            </div>
            <div className={css["card-content"]}>
                <h2>{name}</h2>
                <span>{price}</span>
                <div className={css["card-footer"]}>
                    <button
                    onClick={onChangephoneDetail}
                    className="btn btn-dark"
                    >Xem chi tiết
                    </button>
                    <button
                    onClick={onAddSanpham}
                    >Thêm vào giỏ hàng
                    </button>
                </div>
            </div>

         </div>
        </>
    )
}