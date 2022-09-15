import { Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import ContactInterface from "../../interfaces/ContactInterface";
import ContactListItem from "./ContactListItem";

interface Props {
    data: ContactInterface[];
    selectedHandler: React.Dispatch<
        React.SetStateAction<ContactInterface | undefined>
    >;
}
const ContactList = ({ data, selectedHandler }: Props) => {
    return (
        <div>
            <Divider orientation="left">All contacts</Divider>
            <InfiniteScroll
                dataLength={data.length}
                next={() => {
                    return undefined;
                }}
                hasMore={false}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
                style={{
                    minHeight: "40vh",
                    maxHeight: "70vh",
                    paddingRight: "1rem",
                }}
            >
                <List
                    dataSource={data}
                    renderItem={(item, index) => (
                        <ContactListItem
                            listItem={item}
                            onClickEventHandler={selectedHandler}
                        />
                    )}
                />
            </InfiniteScroll>
        </div>
    );
};

export default ContactList;
