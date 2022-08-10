import { Card } from "react-bootstrap"
import { FormatCurrency } from "../Utilities/FormatCurrency"

type storeItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: storeItemProps  ){
    return (
        <Card>
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flec-column" >
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4" >
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{FormatCurrency( price )}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}