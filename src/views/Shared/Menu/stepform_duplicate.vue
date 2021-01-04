<template>
  <aside>
    <nav class="sidebar">
      <div class="sidebar-header">
        <a href="#" class="ml-4"><img src="logo.png" alt=""/></a>
        <i class="btn-sidebar-close mdi mdi-close mdi-24px"></i>
      </div>
      <div class="sidebar-content">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="mdi mdi-monitor-dashboard mdi-18px"></i>
              <span class="menu-text">Dashboard</span>
              <span class="badge badge-pill badge-warning">New</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li><a href="#">Dashboard v.1</a></li>
                <li><a href="#">Dashboard v.2</a></li>
                <li>
                  <a href="#"
                    >Dashboard v.3<span class="badge badge-pill badge-success"
                      >Pro</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="mdi mdi-cart mdi-18px"></i>
              <span class="menu-text">E-commerce</span>
              <span class="badge badge-pill badge-danger">3</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Invoices</a></li>
                <li><a href="#">Credit cart</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              <i class="mdi mdi-card-account-details-outline mdi-18px"></i>
              <span class="menu-text">Contacts</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mdi mdi-book mdi-18px"></i>
              <span class="menu-text">Projects</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mdi mdi-folder mdi-18px"></i>
              <span class="menu-text">Documents</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mdi mdi-calendar mdi-18px"></i>
              <span class="menu-text">Calendar</span>
              <span class="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <div class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-offset="0,10"
          >
            <i class="mdi mdi-bell mdi-18px"></i>
            <span class="badge badge-pill badge-warning">3</span>
          </a>
          <div class="dropdown-menu notifications">
            <div class="notifications-header">
              <i class="mdi mdi-bell"></i>
              <a href="https://www.jqueryscript.net/tags.php?/Notification/"
                >Notification</a
              >s
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i
                    class="mdi mdi-check-bold text-success border border-success"
                  ></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Do eiusmod tempor incididunt est pariatur aute laboris
                    cillum consequat reprehenderit excepteur.
                  </div>
                  <div class="notification-time">
                    6 minutes ago
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i
                    class="mdi mdi-exclamation-thick text-info border border-info"
                  ></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Deserunt fugiat exercitation cillum duis cillum tempor esse
                    incididunt ex esse mollit.
                  </div>
                  <div class="notification-time">
                    Today
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i
                    class="mdi mdi-alert text-warning border border-warning"
                  ></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Ullamco minim nostrud exercitation ipsum eu.
                  </div>
                  <div class="notification-time">
                    Yesterday
                  </div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#"
              >View all notifications</a
            >
          </div>
        </div>
        <div class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-offset="0,10"
          >
            <i class="mdi mdi-email mdi-18px"></i>
            <span class="badge badge-pill badge-success">7</span>
          </a>
          <div class="dropdown-menu messages">
            <div class="messages-header">
              <i class="mdi mdi-email"></i>
              Messages
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="img/user.jpg" alt="" />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong>Sander Sørensen</strong>
                  </div>
                  <div class="message-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    totam explicabo
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="img/user.jpg" alt="" />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong>Jenny Ford</strong>
                  </div>
                  <div class="message-detail">
                    Veniam velit tempor aliquip duis deserunt culpa et fugiat ea
                    minim.
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="img/user.jpg" alt="" />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong>Kayla Wood</strong>
                  </div>
                  <div class="message-detail">
                    Voluptate sint laboris est officia quis dolore laborum ex
                    magna tempor id aute.
                  </div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#">View all messages</a>
          </div>
        </div>
        <a href="#"><i class="mdi mdi-cog mdi-18px"></i> </a>
        <a href="#"><i class="mdi mdi-power mdi-18px"></i></a>
      </div>
    </nav>
    <a class="btn-sidebar-show btn btn-sm btn-dark" href="#">
      <i class="mdi mdi-menu"></i>
    </a>
  </aside>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: {},
      button_text: 'Save Profile',
      loading: false,
      errors: {},
      error_msg: {},
      disabled: false,
      step: 1,
      user: {},
      key: '',
    };
  },
  components: {},
  mounted() {},
  methods: {
    jumpTo() {
      this.$router.push(this.key);
    },
    navigate(key) {
      this.errors = {};
      if (!this.data[key]) {
        this.errors[key] = true;
        return;
      }
      this.step = ++this.step;
    },
    submit() {
      this.errors = {};
      if (!this.data.phone) {
        this.errors.phone = true;
        return;
      }
      this.loading = true;
      this.button_text = 'Loading...';
      const self = this;
      this.data.client_id = 2;
      this.data.grant_type = 'password';
      this.data.client_secret = 'oDgySym8lQwoRUyERKnmTahkjPLBtZtwm2MsItLH';
      axios
        .post(`${this.$baseUrl}/business/register`, this.data)
        .then(response => {
          self.loading = false;
          localStorage.setItem(
            'cerebro-user',
            JSON.stringify(response.data.user.data)
          );
          localStorage.setItem('cerebro-token', response.data.access_token);
          // this.$swal("Fantastic!", "Welcome to Cerebro", "success");
          this.$toasted.success('Account successfully created').goAway(2500);
          this.step = 7;
          // this.$router.push("/dashboard/business/create/consult");
          // setTimeout( () => this.$router.push("/dashboard/business/create/consult"), 3000);
          this.loading = false;
        })
        .catch(error => {
          self.loading = false;
          self.button_text = 'Save Profile';
          self.step = 1;
          self.$toasted
            .error(error.response.data.errors[0].source.email)
            .goAway(2500);
        });
    },
  },
};
</script>

<style scoped>
.log {
  min-height: 100vh;
}
.v-application a {
  color: white;
}
</style>
