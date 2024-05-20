import React from "react";
import "../styles/chat.scss";

const Chat = () => {
  return (
    <div className="chat-project">
      <div className="container">
        <h3>Click on Arrow button to see the next screen</h3>

        <div className="fabs">
          <div className="chat">
            <div className="chat_header">
              <div className="chat_option">
                <div className="header_img">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="User Avatar"
                  />
                </div>
                <span id="chat_head">Jane Doe</span> <br />
                <span className="agent">Agent</span>{" "}
                <span className="online">(Online)</span>
                <span
                  id="chat_fullscreen_loader"
                  className="chat_fullscreen_loader"
                >
                  <i className="fullscreen zmdi zmdi-window-maximize"></i>
                </span>
              </div>
            </div>
            <div className="chat_body chat_login">
              <a id="chat_first_screen" className="fab">
                <i className="zmdi zmdi-arrow-right"></i>
              </a>
              <p>
                We make it simple and seamless for businesses and people to talk
                to each other. Ask us anything
              </p>
            </div>
            <div id="chat_converse" className="chat_conversion chat_converse">
              <a id="chat_second_screen" className="fab">
                <i className="zmdi zmdi-arrow-right"></i>
              </a>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Hey there! Any question?
              </span>
              <span className="chat_msg_item chat_msg_item_user">Hello!</span>
              <span className="status">20m ago</span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Hey! Would you like to talk sales, support, or anyone?
              </span>
              <span className="chat_msg_item chat_msg_item_user">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <span className="status2">Just now. Not seen yet</span>
            </div>
            <div id="chat_body" className="chat_body">
              <div className="chat_category">
                <a id="chat_third_screen" className="fab">
                  <i className="zmdi zmdi-arrow-right"></i>
                </a>
                <p>What would you like to talk about?</p>
                <ul>
                  <li>Tech</li>
                  <li className="active">Sales</li>
                  <li>Pricing</li>
                  <li>other</li>
                </ul>
              </div>
            </div>
            <div id="chat_form" className="chat_converse chat_form">
              <a id="chat_fourth_screen" className="fab">
                <i className="zmdi zmdi-arrow-right"></i>
              </a>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Hey there! Any question?
              </span>
              <span className="chat_msg_item chat_msg_item_user">Hello!</span>
              <span className="status">20m ago</span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Agent typically replies in a few hours. Don't miss their reply.
                <div>
                  <br />
                  <form className="get-notified">
                    <label htmlFor="chat_log_email">
                      Get notified by email
                    </label>
                    <input id="chat_log_email" placeholder="Enter your email" />
                    <i className="zmdi zmdi-chevron-right"></i>
                  </form>
                </div>
              </span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Send a message
              </span>
            </div>
            <div id="chat_fullscreen" className="chat_conversion chat_converse">
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Hey there! Any question?
              </span>
              <span className="chat_msg_item chat_msg_item_user">Hello!</span>
              <div className="status">20m ago</div>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Hey! Would you like to talk sales, support, or anyone?
              </span>
              <span className="chat_msg_item chat_msg_item_user">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
              <span className="chat_msg_item chat_msg_item_user">
                Where can I get some?
              </span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <img
                    src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"
                    alt="Agent Avatar"
                  />
                </div>
                The standard chuck...
              </span>
              <span className="chat_msg_item chat_msg_item_user">
                There are many variations of passages of Lorem Ipsum available
              </span>
              <div className="status2">Just now, Not seen yet</div>
              <span className="chat_msg_item">
                <ul className="tags">
                  <li>Hats</li>
                  <li>T-Shirts</li>
                  <li>Pants</li>
                </ul>
              </span>
            </div>
            <div className="fab_field">
              <a id="fab_camera" className="fab">
                <i className="zmdi zmdi-camera"></i>
              </a>
              <a id="fab_send" className="fab">
                <i className="zmdi zmdi-mail-send"></i>
              </a>
              <textarea
                id="chatSend"
                name="chat_message"
                placeholder="Send a message"
                className="chat_field chat_message"
              ></textarea>
            </div>
          </div>
          <a id="prime" className="fab ms-auto">
            <i className="prime ms-auto zmdi zmdi-comment-outline"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chat;
