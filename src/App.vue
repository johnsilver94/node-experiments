<template>
  <div id="app">
    <div class="task-container">
      <ul class="task-list">
        <li class="task-column task-column-on-hold">
          <span class="task-column-header">
            <h2>Ideas/tasks</h2>
          </span>
          <div class="task-input">
            <input
              type="text"
              placeholder="Add an issue"
              @keyup.enter="addIssue('tasks')"
              v-model="create.tasks"
            />
          </div>
          <ul class="task-inner-list" id="tasks">
            <li v-for="(item, index) in tasks" :key="index" class="task-item">
              <h1>{{ item.name }}</h1>
              <span class="task-time"
                >{{ item.billed }} / {{ item.estimate }}</span
              >
              <div id="clockdiv"></div>
              <ul class="assigned">
                <li v-for="(dev, index) in item.assigned" :key="index">
                  <img :src="dev.avatar" alt />
                </li>
              </ul>
              <button
                class="track-task"
                @click="!item.tracked ? trackTask(item) : stopTask(item)"
              >
                <i class="material-icons" v-if="!item.tracked">play_arrow</i>
                <i class="material-icons" v-if="item.tracked">pause</i>
              </button>
            </li>
          </ul>
        </li>
        <li class="task-column task-column-in-progress">
          <span class="task-column-header">
            <h2>In Progress</h2>
          </span>
          <div class="task-input">
            <input
              type="text"
              placeholder="Add an issue"
              @keyup.enter="addIssue('inprogress')"
              v-model="create.inprogress"
            />
          </div>
          <ul class="task-inner-list" id="inprogress">
            <li
              v-for="(item, index) in inprogress"
              :key="index"
              class="task-item"
            >
              <h1>{{ item.name }}</h1>
              <span class="task-time"
                >{{ item.billed }} / {{ item.estimate }}</span
              >
              <ul class="assigned">
                <li v-for="(dev, index) in item.assigned" :key="index">
                  <img :src="dev.avatar" alt />
                </li>
              </ul>
              <button
                class="track-task"
                @click="!item.tracked ? trackTask(item) : stopTask(item)"
              >
                <i class="material-icons" v-if="!item.tracked">play_arrow</i>
                <i class="material-icons" v-if="item.tracked">pause</i>
              </button>
            </li>
          </ul>
        </li>
        <li class="task-column task-column-needs-review">
          <span class="task-column-header">
            <h2>Needs Review</h2>
          </span>
          <div class="task-input">
            <input
              type="text"
              placeholder="Add an issue"
              @keyup.enter="addIssue('review')"
              v-model="create.review"
            />
          </div>
          <ul class="task-inner-list" id="review">
            <li v-for="(item, index) in review" :key="index" class="task-item">
              <h1>{{ item.name }}</h1>
              <span class="task-time"
                >{{ item.billed }} / {{ item.estimate }}</span
              >
              <ul class="assigned">
                <li v-for="(dev, index) in item.assigned" :key="index">
                  <img :src="dev.avatar" alt />
                </li>
              </ul>
              <button
                class="track-task"
                @click="!item.tracked ? trackTask(item) : stopTask(item)"
              >
                <i class="material-icons" v-if="!item.tracked">play_arrow</i>
                <i class="material-icons" v-if="item.tracked">pause</i>
              </button>
            </li>
          </ul>
        </li>
        <li class="task-column task-column-approved">
          <span class="task-column-header">
            <h2>Approved</h2>
          </span>
          <div class="task-input">
            <input
              type="text"
              placeholder="Add an issue"
              @keyup.enter="addIssue('approved')"
              v-model="create.approved"
            />
          </div>
          <ul class="task-inner-list" id="approved">
            <li
              v-for="(item, index) in approved"
              :key="index"
              class="task-item"
            >
              <h1>{{ item.name }}</h1>
              <span class="task-time"
                >{{ item.billed }} / {{ item.estimate }}</span
              >
              <ul class="assigned">
                <li v-for="(dev, index) in item.assigned" :key="index">
                  <img :src="dev.avatar" alt />
                </li>
              </ul>
              <button
                class="track-task"
                @click="!item.tracked ? trackTask(item) : stopTask(item)"
              >
                <i class="material-icons" v-if="!item.tracked">play_arrow</i>
                <i class="material-icons" v-if="item.tracked">pause</i>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const $ = require("jquery")(window);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dragula = require("dragula");
function onCreate() {
  $(document).ready(() => {
    dragula([
      document.getElementById("tasks"),
      document.getElementById("inprogress"),
      document.getElementById("review"),
      document.getElementById("approved")
    ])
      .on("drag", function(el) {
        el.classList.add("is-moving");
      })

      .on("dragend", function(el) {
        el.classList.remove("is-moving");
        window.setTimeout(function() {
          el.classList.add("is-moved");
          window.setTimeout(function() {
            el.classList.remove("is-moved");
          }, 600);
        }, 100);
      });
  });
}
export default {
  name: "App",
  created: onCreate,
  data() {
    return {
      create: {},
      tasks: [
        {
          name: "New sidebar design",
          estimate: "20:00:00",
          billed: "00:00:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        },
        {
          name: "Header design features",
          estimate: "20:00:00",
          billed: "00:00:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        }
      ],
      inprogress: [
        {
          name: "Login error",
          estimate: "20:00:00",
          billed: "04:10:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        }
      ],
      review: [
        {
          name: "Onboarding screens",
          estimate: "30:00:00",
          billed: "22:30:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        },
        {
          name: "Dashboard design",
          estimate: "30:00:00",
          billed: "22:30:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        }
      ],
      approved: [
        {
          name: "Account settings screen",
          estimate: "16:00:00",
          billed: "11:00:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        },
        {
          name: "Mobile layout",
          estimate: "16:00:00",
          billed: "11:00:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        },
        {
          name: "On scroll header layout",
          estimate: "16:00:00",
          billed: "11:00:00",
          tracked: false,
          assigned: [
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"
            },
            {
              avatar:
                "https://d.fastcompany.net/multisite_files/fastcompany/fc_files/profile/2219225-austin-carr-profile.jpg"
            }
          ]
        }
      ]
    };
  },
  methods: {
    addIssue: function(key) {
      if (!this.create[key]) return;
      this[key].push({
        name: this.create[key],
        estimate: "00:00:00",
        billed: "00:00:00",
        tracked: false
      });
      this.create[key] = "";
    },
    trackTask: function(item) {
      item.tracked = true;
    },
    stopTask: function(item) {
      item.tracked = false;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background: #f0f3f7;
  font-weight: 300;
  margin: 0;
  padding: 5rem;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.task-container {
  max-width: 1200px;
  margin: 20px auto;
  .task-list {
    display: flex;
    align-items: flex-start;
    @media (max-width: 750px) {
      display: block;
    }
    .task-column {
      flex: 1;
      margin: 0 10px;
      position: relative;
      overflow: hidden;
      @media (max-width: 750px) {
        margin-bottom: 30px;
      }
      .task-input {
        padding: 0 0 1rem;
        input {
          border: 1px solid #cfd9ea;
          border-top: 0;
          background: white;
          border-radius: 0.2rem;
          box-shadow: 0px 2px 5px rgba(#cfd9ea, 0.1);
          width: 100%;
          padding: 1rem;
          font-size: 1.3rem;
          font-weight: 300;
          outline: none;
          font-family: "Roboto", sans-serif;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          &:focus {
            box-shadow: 0px 4px 10px rgba(#cfd9ea, 0.5);
          }
        }
      }
      .task-column-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem;
        h2 {
          font-size: 1.5rem;
          font-weight: 400;
          margin: 0;
          text-transform: uppercase;
        }
      }
      &-on-hold {
        .task-column-header,
        .is-moved,
        .task-options {
          background: #4b9efd;
          color: white;
        }
      }
      &-in-progress {
        .task-column-header,
        .is-moved,
        .task-options {
          background: #ffb335;
          color: white;
        }
      }
      &-needs-review {
        .task-column-header,
        .is-moved,
        .task-options {
          background: #8473e1;
          color: white;
        }
      }
      &-approved {
        .task-column-header,
        .is-moved,
        .task-options {
          background: #44d26f;
          color: white;
        }
      }
    }
  }
}

.task-inner-list {
  min-height: 50px;
}

.task-item {
  position: relative;
  margin-bottom: 1rem;
  padding: 1rem;
  height: 120px;
  background: white;
  border-radius: 0.2rem;
  border: 1px solid #cfd9ea;
  box-shadow: 0px 2px 5px rgba(#cfd9ea, 0.1);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 400;
    padding-right: 2rem;
  }
  span.task-time {
    font-size: 1.3rem;
    display: inline-block;
    margin-top: 0.5rem;
    color: #566578;
  }
  .assigned {
    display: block;
    margin-top: 1rem;
    li {
      display: inline-block;
      margin-right: 0.5rem;
      img {
        max-width: 20px;
        border-radius: 100%;
      }
    }
  }
  .track-task {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    &:hover {
      opacity: 0.6;
    }
  }
  &.is-moving {
    cursor: move;
  }
}

/* Dragula CSS  */
.gu-mirror {
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  list-style-type: none;
}

.gu-hide {
  display: none !important;
}

.gu-unselectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.gu-transit {
  opacity: 0.5;
}
</style>
