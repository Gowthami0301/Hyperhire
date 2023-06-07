import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spin, Row, Col,Tag, Button ,Input} from "antd";
import "./BookStore.css"
import { Book, BooksResponse } from "../../props/BookStore.props";
const { Meta } = Card;
const { Search } = Input;


const BookStore: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchBooks = async (): Promise<void> => {
    try {
      const response = await axios.get<BooksResponse>(`https://openlibrary.org/subjects/fiction.json?page=${page}`);
      console.log("dfdf", response);

      const data = response.data;
      if (Array.isArray(data.works)) {
        setBooks((prevBooks) => [...prevBooks, ...data.works]);
        setFilteredBooks(prevBooks => [...prevBooks, ...data.works]);

        setHasMore(data.works.length > 0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredBooks(filtered);
    }
  }, [searchQuery, books]);

  const handleSearch = (value: string): void => {
    setSearchQuery(value);
  };

  const handleLoadMore = (): void => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div>
      <h1>Bookstore</h1>
      <Search style={{ width: 300, marginBottom: 20 }} placeholder="Search by title" onSearch={handleSearch} enterButton />
        <Row align={"middle"} gutter={[24, 24]}>
          {filteredBooks.map((book) => (
            <Col span={6}>
              <Card
              size="small"
                key={book.cover_edition_key}
                style={{color:"white",height:300, backgroundImage:`url(https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
              >
                <Meta
                  title={book.title}
                  description={`By ${book.authors.map(item=> item.name)}`}
                />
                <p>Price: ${Math.floor(Math.random() * 2000)}</p>
                {book.subject.map((item,index)=>{
                  if(index<5){
                    return(
                      <Tag style={{color:"white"}}>{item}</Tag>
                    )
                  }
                })}
              </Card>
            </Col>
          ))}
        </Row>
      {loading && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Spin size="large" />
        </div>
      )}
      {!loading && hasMore && (
        <div style={{ textAlign: "center", marginTop: 20 ,color:"white"}}>
          <Button onClick={handleLoadMore} type="primary" shape="round"  size={"large"}>
          Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookStore;
