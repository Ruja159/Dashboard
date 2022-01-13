import React from "react";
import {Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    title: string,
    item: any,
    height: string,
    width: string
}


const DropDown: React.FC<Props> = ({title, item, height,width}) => {
    console.log(item)
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle
                    style={{height: height, width: width}}>
                    {title}
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {item.map((i: any) => (
                            <Dropdown.Item key = {i}>{i}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu >
            </Dropdown>
        </div>
    );
}

export default DropDown;