import { Link } from "react-router-dom";
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";


const Blog = () => {
    const blogs = [
        {
            title: 'Life Skills: This Really is a Real Job',
            thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            author: 'Mark',
            time: '12/04/2022',
            description: 'Usually, I write about DEI-related topics. That\'s what I\'m passionate about, and feel I have things to share. That\'s not what is happening today. Two weeks ago, my mom called me to let me know that my grandma was in the hospital, and it wasn\'t looking good. She needed me to come home to say goodbye. The week before camp started. Could I really do that? My employer said yes, our policies have very clear family leave benefits, and my HR director said, “You need to go.” But could I really do that to my program? No one else can do what I do to get ready for camp, right? I had to do some deep soul-searching to realize that, yes, sometimes things don\'t always go according to plan, and there is never a good time to face the death of a loved one, but camp has given me all the tools I need to deal with this challenge. There are two parts to this story—the part at work, where I realized all the prep I\'d done and the parts I hadn\'t, that let me turn over the last week of camp prep to my assistant and the part at home, where the skills I\'ve learned from being a camp pro that helped me deal with the family challenges and grief processing.'
        },
        {
            title: 'Life Skills: This Really is a Real Job',
            thumbnail: 'https://plus.unsplash.com/premium_photo-1686836995143-cf0963851048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            author: 'Danial',
            time: '03/04/2022',
            description: 'Usually, I write about DEI-related topics. That\'s what I\'m passionate about, and feel I have things to share. That\'s not what is happening today. Two weeks ago, my mom called me to let me know that my grandma was in the hospital, and it wasn\'t looking good. She needed me to come home to say goodbye. The week before camp started. Could I really do that? My employer said yes, our policies have very clear family leave benefits, and my HR director said, “You need to go.” But could I really do that to my program? No one else can do what I do to get ready for camp, right? I had to do some deep soul-searching to realize that, yes, sometimes things don\'t always go according to plan, and there is never a good time to face the death of a loved one, but camp has given me all the tools I need to deal with this challenge. There are two parts to this story—the part at work, where I realized all the prep I\'d done and the parts I hadn\'t, that let me turn over the last week of camp prep to my assistant and the part at home, where the skills I\'ve learned from being a camp pro that helped me deal with the family challenges and grief processing.'
        },
        {
            title: 'Life Skills: This Really is a Real Job',
            thumbnail: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            author: 'Suzi',
            time: '22/03/2022',
            description: 'Usually, I write about DEI-related topics. That\'s what I\'m passionate about, and feel I have things to share. That\'s not what is happening today. Two weeks ago, my mom called me to let me know that my grandma was in the hospital, and it wasn\'t looking good. She needed me to come home to say goodbye. The week before camp started. Could I really do that? My employer said yes, our policies have very clear family leave benefits, and my HR director said, “You need to go.” But could I really do that to my program? No one else can do what I do to get ready for camp, right? I had to do some deep soul-searching to realize that, yes, sometimes things don\'t always go according to plan, and there is never a good time to face the death of a loved one, but camp has given me all the tools I need to deal with this challenge. There are two parts to this story—the part at work, where I realized all the prep I\'d done and the parts I hadn\'t, that let me turn over the last week of camp prep to my assistant and the part at home, where the skills I\'ve learned from being a camp pro that helped me deal with the family challenges and grief processing.'
        },
    ]
    return (
        <>
            <SectionTitle>Top Blogs</SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    blogs.map((blog) =>
                        <Fade>
                            <a href="#">
                                <div className="card w-full bg-light dark:bg-dark dark:text-light text-deepDark rounded-none shadow-xl">
                                    <figure><img src={blog.thumbnail} alt="course thumb" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{blog.title}</h2>
                                        <p className="text-dark/50 dark:text-light/50">By {blog.author}</p>
                                        <p className="text-dark/50 dark:text-light/50">{blog.time}</p>
                                        <p className="text-dark dark:text-light">{blog.description.slice(0, 200)}...</p>
                                    </div>
                                </div>
                            </a>
                        </Fade>

                    )
                }

            </div>

            <div className="flex justify-center mt-10">
                <Link to='/blogs'><PrimaryBtn>All blogs</PrimaryBtn></Link>
            </div>
        </>
    );
};

export default Blog;