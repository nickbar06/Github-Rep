<template lang="">
    <div>
        <br>
        <div class='container'>
            <form @submit="projectSubmit">
            
                <div class='form-group'>
              
                    <label for="projectName" class="form-label">Project Name</label>
                    <input type="text" name='projectName' v-model='project' class="form-control" id="projectInput" >
          
                </div>

                <div class='form-group'>
              
                    <label for="projectDiscription" class="form-label">Description Name</label>
                    <input type="text" name='projectDiscription' v-model='description' class="form-control" id="projectInput" >
          
                </div>

                 <div class='form-group'>
              
                    <label for="projectDiscription" class="form-label">Language</label>
                    <input type="text" name='projectLang' v-model='language' class="form-control" id="projectInput" >
          
                </div>
    
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
  name: "RepositoriesView",
  data() {
    return {
      project: "",
      description: "",
      language: "",
    };
  },
  methods: {
    projectSubmit(e) {
      e.preventDefault();

      if(!this.project) {
        alert('Please add a task')
        return;
      }

      const newProject = {
        id: Math.floor(Math.random() *1000),
        text: this.project,
        description: this.description,
        language: this.language
      }

      console.log(newProject);

      this.$emit('add-proj', newProject);

      this.project = "";
      this.description = "";
      this.language = "";
    }
  }
};
</script>

<style scoped>
label{
  float:left
}
</style>