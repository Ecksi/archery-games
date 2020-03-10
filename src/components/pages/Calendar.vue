<template>
  <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%237CB342&amp;ctz=America%2FDenver&amp;src=aG4zcnJkYWhkOWdnZ2tobHN1dGszN3J2bGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=DAY&amp;title=Archery%20Games%20League%20Calendar" style="border-width:0" class="calendar" frameborder="0" scrolling="no"></iframe>
</template>

<script>
  export default {
    name: 'Calendar'
  }
</script>

<style>
  .calendar {
    width: 100vw;
    height: calc(100vh - 160px);
  }

  .date-nav-buttons {
    height: 100px;
    padding: 24px;
  }
</style>