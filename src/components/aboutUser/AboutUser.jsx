import "./aboutUser.css";

export default function AboutUser() {
  return (
    <div className="about-user-container">
      <div className="profile-pic">
        <img
          className="user-image"
          src="https://images.unsplash.com/photo-1616795255854-2df31c52466d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8NDUzNzM4N3x8ZW58MHx8fHx8"
          alt=""
        />
        <p className="user-name">Maya Ray</p>
      </div>
      <div className="user-details">
        <p className="age">Age 32</p>
        <span>Hobbies</span>
        <p>
          Meet Maya, a software engineer who loves hiking, cooking, playing
          guitar, and solving puzzles. Whether she's trekking through mountains,
          experimenting in the kitchen, strumming melodies, or unraveling
          cryptic riddles, Maya's diverse hobbies reflect her passion for
          exploration and creativity.
        </p>
        <div>
          <span>About me</span>
          <p>
            In the quiet corners of the city, there exists an enigma wrapped in
            anonymity. This elusive figure navigates the streets with a grace
            that hints at a life lived on the fringes of society. Their features
            remain shrouded in mystery beneath the brim of a worn fedora,
            casting shadows over piercing eyes that seem to hold untold stories.
            They move with purpose, yet their footsteps whisper of a past
            unknown to those who pass by. Perhaps they are a lone wanderer,
            seeking solace in the anonymity of urban landscapes, or a silent
            observer, watching the world unfold with a detached curiosity.
            Whatever their story may be, they remain a fleeting presence in the
            tapestry of city life, leaving behind only whispers of their
            existence.
          </p>
        </div>
      </div>
    </div>
  );
}
