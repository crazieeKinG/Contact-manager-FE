import { Divider, Empty, List, Row, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import NewContact from "../../pages/Contact/NewContact";
import { setSelectedContact } from "../../reducers/slices/dataManageSlice";
import { RootState } from "../../reducers/store";
import RefreshData from "../RefreshData/RefreshData";
import ContactCard from "./ContactCard";
import ContactItem from "./ContactItem";

const ContactList = () => {
    const dispatch = useDispatch();
    const refresh = useSelector((state: RootState) => state.dataManage.refresh);
    const data = useSelector((state: RootState) => state.contacts.data);
    const selectedData = useSelector(
        (state: RootState) => state.dataManage.selectedContact
    );

    const displayData = (index: number) => {
        dispatch(setSelectedContact(data[index]));
    };

    return (
        <>
            <Row justify="space-between">
                <div id="scrollableDiv" className="col-lg-6 contact__list">
                    {(!refresh && (
                        <InfiniteScroll
                            dataLength={data.length}
                            next={() => {}}
                            hasMore={false}
                            loader={
                                <Skeleton
                                    avatar
                                    paragraph={{ rows: 1 }}
                                    active
                                />
                            }
                            endMessage={
                                <Divider plain>
                                    It is all, nothing more 🤐
                                </Divider>
                            }
                            scrollableTarget="scrollableDiv"
                        >
                            <Divider orientation="left">
                                Favourite contacts
                            </Divider>
                            <List
                                dataSource={data}
                                renderItem={(item, index) =>
                                    item.favourite && (
                                        <ContactItem
                                            item={item}
                                            index={index}
                                            displayData={displayData}
                                        />
                                    )
                                }
                            />
                            <Divider orientation="left">All contacts</Divider>
                            <List
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <ContactItem
                                        item={item}
                                        index={index}
                                        displayData={displayData}
                                    />
                                )}
                            />
                        </InfiniteScroll>
                    )) || <RefreshData />}
                </div>
                <div className="col-lg-6 pl-2">
                    <NewContact />
                    <Divider />

                    {selectedData ? (
                        <ContactCard data={selectedData} />
                    ) : (
                        <Empty
                            description="No data selected"
                            className="mt-4"
                        />
                    )}
                </div>
            </Row>
        </>
    );
};

export default ContactList;
