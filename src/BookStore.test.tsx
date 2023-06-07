import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import Bookstore from './component/bookstore/BookStore.layout';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Bookstore', () => {
  beforeEach(() => {
    mockedAxios.get.mockClear();
  });

  test('renders book cards correctly', async () => {
    const mockBooks = [
      {
        title: 'Book 1',
        author: 'Author 1',
        coverImage: 'image1.jpg',
        price: 10,
        tags: ['fiction', 'science'],
      },
      {
        title: 'Book 2',
        author: 'Author 2',
        coverImage: 'image2.jpg',
        price: 15,
        tags: ['non-fiction'],
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { books: mockBooks, hasMore: true } });

    render(<Bookstore />);

    await waitFor(() => {
      expect(screen.getByText('Book 1')).toBeInTheDocument();
      expect(screen.getByText('By Author 1')).toBeInTheDocument();
      expect(screen.getByAltText('Book 1')).toBeInTheDocument();
      expect(screen.getByText('Price: $10')).toBeInTheDocument();
      expect(screen.getByText('Tags: fiction, science')).toBeInTheDocument();

      expect(screen.getByText('Book 2')).toBeInTheDocument();
      expect(screen.getByText('By Author 2')).toBeInTheDocument();
      expect(screen.getByAltText('Book 2')).toBeInTheDocument();
      expect(screen.getByText('Price: $15')).toBeInTheDocument();
      expect(screen.getByText('Tags: non-fiction')).toBeInTheDocument();
    });
  });

  test('loads more books on load more button click', async () => {
    const mockBooksPage1 = [
      {
        title: 'Book 1',
        author: 'Author 1',
        coverImage: 'image1.jpg',
        price: 10,
        tags: ['fiction', 'science'],
      },
    ];

    const mockBooksPage2 = [
      {
        title: 'Book 2',
        author: 'Author 2',
        coverImage: 'image2.jpg',
        price: 15,
        tags: ['non-fiction'],
      },
    ];

    mockedAxios.get
      .mockResolvedValueOnce({ data: { books: mockBooksPage1, hasMore: true } })
      .mockResolvedValueOnce({ data: { books: mockBooksPage2, hasMore: false } });

    render(<Bookstore />);

    await waitFor(() => {
      expect(screen.getByText('Book 1')).toBeInTheDocument();
      expect(screen.queryByText('Book 2')).not.toBeInTheDocument();
    });

    const loadMoreButton = screen.getByText('Load More');
    loadMoreButton.click();

    await waitFor(() => {
      expect(screen.getByText('Book 1')).toBeInTheDocument();
      expect(screen.getByText('Book 2')).toBeInTheDocument();
    });
  });
});
