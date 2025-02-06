import React from "react";

// Styling
import styles from "./body.module.css";
import cn from "classnames";

// Golden Sphere
import goldenSphere from "../../imgs/goldenSphere.png";

// Images
import societly from "../../imgs/societly.jpg";
import shooty from "../../imgs/shooty.jpg";
import notes from "../../imgs/notes.jpg";
import planaura from "../../imgs/planaura.jpg";
import quiz from "../../imgs/quiz.jpg";
import rm from "../../imgs/rm.jpg";
import ment from "../../imgs/ment.jpg";
import todoApp from "../../imgs/todoApp.jpg";
import chattie from "../../imgs/chattie.jpg";
import drang from "../../imgs/drang.jpg";
import hedge from "../../imgs/hedge.jpg";
import meme from "../../imgs/meme.jpg";

function Nav() {
  return (
    <div className={cn(styles.body)}>
      <div className={cn(`container`)}>
        <div className={cn(styles.grid)}>
          <div className={cn(styles.sec)}>
            <h3>SoCietly</h3>
            <h4>A post bootcamp social platform</h4>
            <img className={cn(styles.image)} src={societly} alt="societly" />
            <p>
              Worked within an agile team of 5 people to build a full-stack
              application for the School of Code in 4 weeks. The platform aims
              to strengthen the community after the course through event
              organisation, while allowing coaches to gauge the wider impact of
              the course. We utilised tools such as Jira to plan and work in
              short sprints, as well as Balsamiq and Adobe XD, to build
              wireframe and hi-fidelity designs. I focused primarily on
              front-end implementation using React, as well as the front-end
              design and user experience. We implemented external modules
              including Nodemailer to integrate event reminders and updates, and
              the Google Maps API for event locations.
            </p>
            <a
              href="https://societly.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className={cn("button", styles.button)}>
                View project
              </button>
            </a>
            <a
              href="https://github.com/Za-Qar/SoCietly-backend"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={cn("button", styles.button, styles.buttonRight)}
              >
                View backend
              </button>
            </a>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Shooty Mc Beard Face</h3>
            <h4>A javaScript object oriented programmed game</h4>
            <img
              className={cn(styles.image)}
              src={shooty}
              alt="shoot Mc shoot face"
            />
            <p>
              During a two day hackathon, my teammate and I started planning
              thinking of an interesting and fun game to play. We came up with
              the concept of Shooty Mc Beard Face and begun. We first made a
              detailed plan of what classes we will have, what states they will
              contain and what their behaviours will be. We then started coding
              and iterating over the plan in an agile fashion. We faced some
              issues such as creating a computer player for the user to play
              against and it was solved changing the position of the computer
              player randomly then writing out some logic regarding what would
              happen when the bullets touch either player or the obstacles in
              the map. We used Math.max to limit the player’s health and also
              gave the player the capability to move around the map using x and
              y positions in the Canvas and also to shoot with the left mouse
              button. We finished our MVP within the time frame given to us.
            </p>
            <a
              href="https://shooty-mc-beard-face.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className={cn("button", styles.button)}>
                View project
              </button>
            </a>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Todos-counters-notes</h3>
            <h4>Keeping life organised in one place</h4>
            <img
              className={cn(styles.image)}
              src={notes}
              alt="todos-cotuners-notes"
            />
            <p>
              Scheduling and organisation is a core part of our lives so I
              designed the app to seem like it is a living entity to represent
              that concept. When you hover over the buttons, they animate in and
              out as if they are breathing. When a user creates a todo, counter
              or note, they are encrypted using cryptoJs AES and then sent to
              the backend where they are encrypted again before being sent to
              the database. The reason I did this was just to give users peace
              of mind that their data is being handles securely even though it
              is not very necessary since the app runs on https which anyways
              encrypts data. That being said, privacy nowadays is a very
              important factor so practice in this field is always good.
            </p>
            <a
              href="https://todos-counter-notes.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className={cn("button", styles.button)}>
                View project
              </button>
            </a>
            <a
              href="https://github.com/Za-Qar/todos_counters_notes-backend"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={cn("button", styles.button, styles.buttonRight)}
              >
                View backend
              </button>
            </a>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Planaura</h3>
            <h4>
              A Chromium based browser that donates 70% of it's earnings to
              Earth supporting causes
            </h4>
            <img className={cn(styles.image)} src={planaura} alt="Planaura" />
            <p>
              A web browser based on Chromium that donates 70% of its annual
              income to at least 3 causes. I made the browser so that users can
              easily switch from any other Chromium based browser to Planaura
              with just a couple clicks. I also pre-installed some extensions
              like ad-block and picture-in-picture to make it more attractive to
              users. Along with that, I made sure that it is safe and secure
              especially when saving passwords. Many other features are
              highlighted on the website.
            </p>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Trivia Quizer</h3>
            <h4>A fun and replayable quiz game</h4>
            <img className={cn(styles.image)} src={quiz} alt="quiz game" />
            <p>
              We used opentdb's trivia api and received 3 incorrect answers in
              one array and 1 correct in another from the api. We then took to
              placing them in one array and assigning them to li tags so users
              can interact with them but also wrote a function which shuffles
              location of the correct/incorrect answers as to make them appear
              in a different choice option every time. The game also informs the
              player of the correct/incorrect answer when they make their
              choice. It's a fun and competitive game that was done with a heart
              full of passion and little time.
            </p>
            <a
              href="https://trivia-quiz-game.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className={cn("button", styles.button)}>
                View project
              </button>
            </a>
          </div>

          <div className={cn(styles.sec)}>
            <h3>RainMakers</h3>
            <h4>
              A weather manipulation and rainfall enhancement company brand and
              website
            </h4>
            <img
              className={cn(styles.image)}
              src={rm}
              alt="todos-cotuners-notes"
            />
            <p>
              Rainmakers is a weather manipulation and rainfall enhancement
              company that is based in Germany. I designed the whole corporate
              identity and also programmed the website using html and css. The
              website is full responsive.
            </p>
            <a href="https://rain-makers.org" target="_blank" rel="noreferrer">
              <button className={cn("button", styles.button)}>
                View project
              </button>
            </a>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Mentor Mentee Matcher</h3>
            <h4>
              Matching compatible mentors and mentees across the programming
              world
            </h4>
            <img
              className={cn(styles.image)}
              src={ment}
              alt="todos-cotuners-notes"
            />
            <p>
              This project was done in a group of 5 over a span of 4 days. We
              were tasked with creating a platform were mentors and mentees can
              visit, submit a form and get matched with one another based on
              specific criterion. The criterion include the skills the mentee
              wants to inherit for their future plans and also a myers Briggs
              personality type. Essentially we wanted mentors and mentees to
              have compatible personality types after reading a scientific
              article that this way the learning is enhanced.
            </p>
            <a
              href="https://mentor-matcher.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className={cn("button", styles.button)}>
                View project
              </button>
            </a>
            <a
              href="https://github.com/Za-Qar/mentor_matcher-backend"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={cn("button", styles.button, styles.buttonRight)}
              >
                View backend
              </button>
            </a>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Todo list - React Native</h3>
            <h4>A todo organiser app for both Android and IOS</h4>
            <img
              className={cn(styles.image)}
              src={todoApp}
              alt="todos-cotuners-notes"
            />
            <p>
              Made with React-Native, this is a straight forward todo list that
              allows people to carry their todos from the web app above on their
              phone as an app if they please
            </p>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Chattie chat app</h3>
            <h4>A web app that enable people to chat utilising websockets</h4>
            <img
              className={cn(styles.image)}
              src={chattie}
              alt="todos-cotuners-notes"
            />
            <p>
              You type in your name and enter the chat room. You can talk with
              whoever has the link. This was an exercise to look at some foreign
              code then debug it to make sure everything was working as intended
            </p>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Drang Strenge Muse</h3>
            <h4>
              My first ever real website. A university projects exhibition
              website
            </h4>
            <img
              className={cn(styles.image)}
              src={drang}
              alt="drang-strenge-muse"
            />
            <p>
              A website for university graduates to exhibit their graduation
              projects in the school of design and visual communication. The
              university would make a physical and online exhibition for the
              projects every semester and students can then send the link off to
              employers, family and friends.{" "}
            </p>
            <a
              href="https://exhibition-drang-strenge-muse.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={cn("button", styles.button)}>
                View project
              </button>
            </a>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Hedge Eagle</h3>
            <h4>A London based start-up</h4>
            <img
              className={cn(styles.image)}
              src={hedge}
              alt="todos-cotuners-notes"
            />
            <p>
              I took to designing and building this website using WordPress for
              a London based start-up named Hedge Eagle that specialises in
              hedge funding and investment
            </p>
          </div>

          <div className={cn(styles.sec)}>
            <h3>Meme website :)</h3>
            <h4>The best place to waste your time then feel guilty about it</h4>
            <img
              className={cn(styles.image)}
              src={meme}
              alt="todos-cotuners-notes"
            />
            <p>
              Using the reddit api, I made a meme website were users can scroll
              endlessly through memes with the little time they have to waste
              every day then up vote and give their not so useful opinions in
              the comment section
            </p>
          </div>
        </div>
      </div>
      <div className={cn(styles.goldenSphere)}>
        <img alt="golden sphere" src={goldenSphere} />
        <img alt="golden sphere" src={goldenSphere} />
        <img alt="golden sphere" src={goldenSphere} />
        <img alt="golden sphere" src={goldenSphere} />
        <img alt="golden sphere" src={goldenSphere} />
        <img alt="golden sphere" src={goldenSphere} />
        <img alt="golden sphere" src={goldenSphere} />
      </div>
    </div>
  );
}

export default Nav;
