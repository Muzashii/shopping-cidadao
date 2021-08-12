<template>
  <v-container fluid>
    <v-card>
      <v-container fluid>
        <v-form v-model="valid">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Nome"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="11"
                label="CPF"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="values"
              :items="items"
              outlined
              dense
              chips
              small-chips
              label="Cursos"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-btn depressed> ENVIAR </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Html", "Css", "Javascipt", "Typescript"],
    values: ["foo", "bar"],
    value: null,

    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
