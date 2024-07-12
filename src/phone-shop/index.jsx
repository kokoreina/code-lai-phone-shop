import { useState } from "react";
import { mockData } from "./mock-data";
import { useEffect } from "react";
import { Fragment } from "react";
import { Card } from "./components/card";
import { Xemchitiet } from "./components/xem-chi-tiet";
import { Transformsanpham } from "./utils";
import { Giohang } from "./components/gio-hang";
export function Phoneshop() {
    const [phoneDetail, setPhoneDetail] = useState(mockData[0]);
    const onChangePhoneDetail = (item) => {
        setPhoneDetail(item);
    };
    useEffect(() => {}, []);
    const [listSanpham, setListSanpham] = useState([]);
    const onAddSanpham = (sanPham) => {
        sanPham = Transformsanpham(sanPham);
        const newList = [...listSanpham];
        const item = listSanpham.find((i) => i.id === sanPham.id);
        if (item) {
            item.amount += 1;
        } else {
            listSanpham.push(sanPham);
        }
        setListSanpham([...listSanpham]);
    };
    const onDelete = (id) => {
        if (confirm("Bạn có chắc muốn xoá sản phẩm này hay không")) {
            const newListSanPham = listSanpham.filter((i) => i.id !== id);
            setListSanpham(newListSanPham);
        }
    };
    const onTang = (id) => {
        const sanpham = listSanpham.find((i) => i.id === id);
        if (sanpham) {
            sanpham.amount += 1;
            setListSanpham([...listSanpham]);
        }
    };
    const onGiam = (id) => {
        const sanpham = listSanpham.find((i) => i.id === id);
        if (sanpham) {
            if (sanpham.amount === 1) {
                onDelete(id);
                return;
            }
            sanpham.amount -= 1;
            setListSanpham([...listSanpham]);
        }
    };
    return (
        <>
            <div className="container">
                <Giohang
                    onTang={onTang}
                    onGiam={onGiam}
                    listSanpham={listSanpham}
                    onDelete={onDelete}
                ></Giohang>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: 30,
                    justifyContent: "center",
                }}
            >
                {mockData.map((item) => {
                    return (
                        <Fragment key={item.maSP}>
                            <Card
                                name={item.tenSP}
                                price={item.giaBan}
                                image={item.hinhAnh}
                                onChangephoneDetail={() =>
                                    onChangePhoneDetail(item)
                                }
                                onAddSanpham={()=>
                                    onAddSanpham(item)
                                }
                            ></Card>
                        </Fragment>
                    );
                })}
            </div>
            <div>
                <Xemchitiet
                    name={phoneDetail.tenSP}
                    img={phoneDetail.hinhAnh}
                    manHinh={phoneDetail.manHinh}
                    cameraSau={phoneDetail.cameraSau}
                    cameraTruoc={phoneDetail.cameraTruoc}
                    heDieuHanh={phoneDetail.heDieuHanh}
                    ram={phoneDetail.ram}
                    rom={phoneDetail.rom}
                ></Xemchitiet>
            </div>
        </>
    );
}
