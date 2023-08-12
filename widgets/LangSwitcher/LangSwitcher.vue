<template>
  <div>
    <label for="lang-en">
      <input
        id="lang-en"
        v-model="$i18n.locale"
        name="lang"
        type="radio"
        value="en"
      />En
    </label>
    <label for="lang-ru">
      <input
        id="lang-ru"
        v-model="$i18n.locale"
        name="lang"
        type="radio"
        value="ru"
      />Ru
    </label>
  </div>
</template>
