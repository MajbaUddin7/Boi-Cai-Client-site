import React from 'react';
import BlogDetails from './BlogDetails';
import Blogs from './Blogs';

const Blog = () => {
    const allBlogs = [
        {
            id: "01",
            name: 'What are the different ways to manage a state in a React application?',
            details: 'Different ways to manage state in React applications. URL: We can use URL to store some data e.g. The id of the current item, being viewed Filter parameters Pagination offset and limit Sorting data Keeping such data in the URL allows users to share deep links with others.It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync.The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc.Update the URL as required when the settings change'
        },
        {
            id: "02",
            name: 'How does prototypical inheritance work?',
            details: 'JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure(data fields), behavior(functions / methods), and state(data values). JavaScript is the most common of the prototype - capable languages, and its capabilities are relatively unique.When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.'
        },
        {
            id: "03",
            name: 'What is a unit test? Why should we write unit tests?',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse quis laborum autem unde iste, quod dolores officiis vero consequatur laboriosam eius nisi quas nam molestiae! Odit officiis architecto ea.'
        },
        {
            id: "04",
            name: 'React vs. Angular vs. Vue?',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse quis laborum autem unde iste, quod dolores officiis vero consequatur laboriosam eius nisi quas nam molestiae! Odit officiis architecto ea.'
        }
    ]
    return (
        <div>
            {
                allBlogs.map(singleBlog => <BlogDetails
                    key={singleBlog.id}
                    singleBlog={singleBlog}
                ></BlogDetails>)
            }
        </div>
    );
};

export default Blog;