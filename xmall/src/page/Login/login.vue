<template>
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm login-form ">
      <el-form-item prop="name">
        <el-input type="text" v-model="ruleForm2.name" placeholder='请输入用户名'></el-input>
      </el-form-item>
      <el-form-item prop="password" >
        <el-input type="password" v-model="ruleForm2.password" placeholder='请输入密码' class='pwd' > </el-input><i class="fa fa-eye icon-eye1"></i>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" size='medium' @click="submitForm('ruleForm2')">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        ruleForm2: {
          password: '',
          name: '',
          age: ''
        },
        rules2: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ]
        }

      };

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }

    }
  }
</script>

<style scoped>

  .login-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ccc;
  }

  .login-form {
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translate(-50%);
    width: 400px;
    height: 250px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 40px 20px 30px;
  }

  .login-form .login-btn {
    width: 100px;
    margin-left: 138px;
  }


  .login .icon-eye1 {
    position: absolute;
    right: 22px;
    top: 13px;
    width: 10px;
    height: 10px;
    font-size: 18px;
  }

</style>
