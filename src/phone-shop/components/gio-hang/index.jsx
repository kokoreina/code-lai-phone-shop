export function Giohang({ listSanpham, onTang, onGiam, onDelete }) {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listSanpham.map((i) => {
                        return (
                            <tr key={i.id}>
                                <th scope="row">{i.id}</th>
                                <td>{i.name}</td>
                                <td>{i.price}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            onGiam(i.id);
                                        }}
                                        className="btn btn-success"
                                    >
                                        -
                                    </button>
                                    <span>{i.amount}</span>
                                    <button
                                        onClick={() => {
                                            onTang(i.id);
                                        }}
                                        className="btn btn-success"
                                    >
                                        +
                                    </button>
                                </td>
                                <td>{i.amount * i.price}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            onDelete(i.id);
                                        }}
                                        className="btn btn-danger"
                                    >
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
