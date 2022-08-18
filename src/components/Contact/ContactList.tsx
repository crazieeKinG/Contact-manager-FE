import { Avatar, Divider, Empty, List, Row, Skeleton } from "antd";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import IContact from "../../domain/IContact";
import ContactCard from "./ContactCard";

interface Props {
    data: IContact[];
}

const ContactList = (props: Props) => {
    const data = props.data;
    const [selectedData, setSelectedData] = useState<IContact | null>(null);

    const displayData = (index: number) => {
        setSelectedData(data[index]);
    };

    return (
        <Row justify="space-between">
            <div id="scrollableDiv" className="col-lg-6 contact__list">
                <InfiniteScroll
                    dataLength={data.length}
                    next={() => {}}
                    hasMore={false}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={
                        <Divider plain>It is all, nothing more 🤐</Divider>
                    }
                    scrollableTarget="scrollableDiv"
                >
                    <Divider orientation="left">Favourite contacts</Divider>
                    <List
                        dataSource={data}
                        renderItem={(item, index) =>
                            item.favourite && (
                                <List.Item
                                    className="contact__list__item"
                                    onClick={() => {
                                        displayData(index);
                                    }}
                                    id={`${index}`}
                                >
                                    <List.Item.Meta
                                        key={`${index}`}
                                        avatar={
                                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                                        }
                                        title={item.name}
                                        description={item.phone}
                                    />
                                </List.Item>
                            )
                        }
                    />
                    <Divider orientation="left">All contacts</Divider>
                    <List
                        dataSource={data}
                        renderItem={(item, index) =>
                            !item.favourite && (
                                <List.Item
                                    className="contact__list__item"
                                    onClick={() => {
                                        displayData(index);
                                    }}
                                    id={`${index}`}
                                >
                                    <List.Item.Meta
                                        key={`${index}`}
                                        avatar={
                                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                                        }
                                        title={item.name}
                                        description={item.phone}
                                    />
                                </List.Item>
                            )
                        }
                    />
                </InfiniteScroll>
            </div>
            <div className="col-lg-6">
                {selectedData ? (
                    <ContactCard setSelectedData={setSelectedData} data={selectedData} />
                ) : (
                    <Empty description="No data selected" className="mt-4" />
                )}
            </div>
        </Row>
    );
};

export default ContactList;
