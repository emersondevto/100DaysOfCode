console.log("R1D62_ProfileScroller_IteratorMiniProject");

const data = [
  {
    name: "John Doe2",
    age: 32,
    gender: "male",
    lookingFor: "famale",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Emerson Perdomo",
    age: 31,
    gender: "male",
    lookingFor: "famale",
    location: "Bogotá CM",
    image: "https://randomuser.me/api/portraits/men/81.jpg"
  },
  {
    name: "Aleja Galesa",
    age: 32,
    gender: "famale",
    lookingFor: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "famale",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/90.jpg"
  }
];

const profiles = profileIterator(data);
// Call first profile
nextProfile();
const nextEvent = document
  .getElementById("next")
  .addEventListener("click", nextProfile);

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false
          }
        : {
            done: true
          };
    }
  };
}

function nextProfile(e) {
  const currentProfile = profiles.next().value;

  if (currentProfile) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>    <li class="list-group-item">Preference: ${currentProfile.lookingFor}</li>
    </ul>
    `;

    document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}" />
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
}
