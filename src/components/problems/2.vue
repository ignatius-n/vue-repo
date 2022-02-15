<template>
  <div>
    <problem-info>
      <ul>
        <li>
          Add and list users to the table, with the first and last names
          required
        </li>
        <li>Clear inputs after adding</li>
        <li>Include a button for removing users</li>
      </ul>
    </problem-info>

    <input required v-model="fname" type="text" placeholder="First Name" />
    <input required v-model="lname" type="text" placeholder="Last Name" />

    <div style="margin-top: 20px">
      <button v-on:click="addUser">Add User</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td v-text="user.index"></td>
          <td v-text="user.fname"></td>
          <td v-text="user.lname"></td>
          <td>
            <button v-on:click="delUser(user)">DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      fname: '',
      lname: '',
      users: [
      ] 
      };
  },
  methods: {
    addUser(){
      //make validation
      if(this.fname.length < 1 || this.lname.length < 1) 
      {
        alert("please fill in all the fields");
        return;
      }

      //push data to stack
      this.users.push({
        index : this.users.length,
        fname : this.fname,
        lname : this.lname
      });

      // //clear inputs
      this.fname = '';
      this.lname = '';
    },
    delUser(user){
      //pop data to stack
      this.users.splice(this.users.indexOf(user), 1);
    }
  }
};
</script>