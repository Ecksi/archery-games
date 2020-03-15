<template>
  <div>
    <h2>League Rules</h2>
    <ul>
      <li>
        <!-- Each one of these can be dummy components -->
        <p @click="transi">Format</p>
        <transition name="slide-fade">
          <span v-if="show">
            All teams play a 1hr match every week.
            Each week, the coin toss winning team gets to select their preferred side of the arena for the first 5 games.
            Matches are a Best of 9 games format. The winner of the match is the team with the most number of games / or first to win 5 games.
            For season rankings, 1pt is awarded for each game that is won (to a maximum of 5) and an additional 2pts are awarded to the overall match winner.
            For example, a 6 - 3 win results in the winning team receiving 7 points (5 + 2) and the losing team receives 3 points.
            If you have any new players joining you as a sub for a week, it is the captain's responsibility to ensure they are aware of the rules (there will be a rules sheet on site as well).
            Playoff seed will be determined first by number of points, then by number of wins.
            If these new players/subs fail to arrive before the first whistle is blown and miss out on training / rules, they will not be allowed to play that evening.
          </span>
        </transition>
      </li>
      <li>
        <p>General Rules</p>
        <span v-if="show">
          Players may only be in the Safety Zone for up to but no longer than 3 seconds. Both feet must be within the two lines to be considered safe if hit by an arrow. If an arrow is shot with a foot on the line then that arrow is no longer live. Players will receive one Safety Zone warning per game and will subsequently be called out. 
          Each time a player enters the safety zone that player may remove only one arrow. The safety zone may only be entered with the intent to grab an arrow. The Safety Zone will not be used only to avoid getting hit. 
          Arrows may be thrown laterally to a teammate, but throws may only be underhand and players must be no more than 10 feet apart. 
          Players may not cross to the other side of the field during the regular 9 game format. Arrows that can be reached without exiting the Safety Zone and infiltrating the opposing team’s field may be picked up. Both feet need to remain planted within the Safety Zone and reaching for an arrow on the opposing field with a bow will not be permitted. 
          When a team is down to one final arrow on their side they will be given 5 additional arrows by the referee at their request - and this only occurs once a game.
          Players are OUT when hit by an arrow on their body or bow/arrow. If a player catches an arrow they are not out, nor is the person that fired it (exception being if a “dodgeball rule” is implemented for that game, in which case the person that fired the arrow is out). Catching an arrow revives one teammate. 
          As soon as the arrow connects with anything else it is considered dead. An arrow may only be caught off of the wall if the player has contact with the arrow throughout the catch and the catcher has control of the arrow at the end of the catch absent the wall (i.e, an arrow can’t be caught by pressing the arrow into the wall). The exception to this rule is any teammate that is in jail during jailbreak in which a catch off the back fencing and/or netting is permissible regardless if contact is maintained while touching wall/fencing. During both instances, the arrow will not be counted as a catch if it touches the ground for any reason.
          Players on the sideline cannot have an arrow in their possession or as they enter the playing field. Re-entry to the field is first out, first in; players may not reenter the field out of order. After crossing into play a player is considered live and can be hit when they either a) enter the field without an arm raised, b) lower their arm below parallel to pickup and arrow, or c) actively block as a defender. 
          While exiting a game you must have a hand up to indicate you are no longer a live player. 
          Games will occasionally need to be stopped mid-match (helmet dislodged, any threat to the safety of the players, etc.). A whistle blow followed by calling “timeout” will indicate the pause. Players are to drop all arrows in their possession and return to the back fence. Once the issue has been resolved, play will resume on the next whistle. Players may not touch arrows during stoppage periods.
          If at any point during the match a team has an issue or concern they may have one representative from the team (preferably the team captain) speak with the referee. Refereeing is difficult; if you believe a player is intentionally not going out when hit please bring it to the attention of the referee to be discussed with the line judges. Any player caught intentionally cheating will walk the walk of shame (everyone will start against the fence with an arrow. That player must slowly walk across the safety zone while players from both teams shoot their one arrow at them while slowly chanting SHAME (like on Game of Thrones, but with clothes on).
          Past 4 minutes you enter sudden death
          Signaled by a short whistle and a loud announcement of Sudden Death
          Players will start against the wall with arrow in hand
          Players cannot re-enter the game
          The next player out ends the game
          If less than all teammates are on the field at the start of Sudden Death, bringing a player back in (catch, hitting the target, etc) will also win the game 
          You have to be on the field as an active player to continue any game, if the last player is out before you become an active player, the game ends as there are no active players on the field.
          Good sportsmanship is required at all times. Any player exhibiting poor sportsmanship will be called out. Poor sportsmanship includes attempting to find loopholes in these well written rules (intentionally knocking out the opposing teams targets as an example).
        </span>
      </li>
      <li>
        <p>Elimination</p>
        <span v-if="show">
          Each team will have five revival targets. For each target knocked out 1 player may reenter.
          Revival targets cannot be banked. Meaning, if you have one player out and hit two targets, only that one player will be revived and the other will be considered a wasted target.
          The winning team is the one with the most players on the field at the end of four minutes. 
          **Note: during engineer (game 4) the standard dodgeball rule is in effect. If a catch is made, the player who fired the shot is out. A catch will revive a player as normal.
        </span>
      </li>
      <li>
        <p>Jailbreak</p>
        <span v-if="show">
          Once hit players must go to the jail on the opposing side. To return to play they must catch an arrow shot by one of their teammates. They may catch an arrow off of the back net / fence before it hits the ground. 
          Only the center jail “cell” is used for league play. If the jail cell is full, players must wait on the sideline for it to open up.  
          Players must exit through the sideline when hit and form a line on the sideline of the opposing side. Players may enter directly through the field. While reentering the field the regular rules for reentering the field apply. A player may also carry an arrow over the line with them from jail, in which case they’re active as soon as they cross the line. 
          Bows are to be brought to jail and stored behind the player against the wall. 
        </span>
      </li>
      <li>
        <p>Dog Eat Dog</p>
        <span v-if="show">
          Dog Eat Dog: Every league match will end with a game of Dog Eat Dog. Points are awarded to the top 2 finishers (7 points for the winner and the runner up receives 3 points). At the end of 4 minutes points will be divided amongst those players remaining 
          These points are tallied up throughout the season for a champion at the end of the season. In the event of a tie (fairly likely), a championship Dog Eat Dog match will occur between all players that are tied in points. 
          During Dog Eat Dog players may only aim across the safety zone. Aiming at players on the same side of the field will result in being called out. 
        </span>
      </li>
      <li>
        <p>Substitute Players</p>
        <span v-if="show">
          It is inevitable that teams may be short players on their full player roster. Teams may call on subs to replace missing team members but must abide by the following rules.
          It is the captain’s responsibility that subs, who are brand new to the sports / rules, show up before the first whistle is blown. Otherwise, they will not be allowed entry into the arena.
          Teams may borrow players from other teams, but only after they have no players on the sideline (ie, no substitutes)
        </span>
      </li>
      <li>
        <p>Game List</p>
        <span v-if="show">
          Game - Description - # of bunkers - Starting w/ arrows
          Elimination -  - 3 - no
          Jailbreak - - 2 - no
          -30 sec team huddle / time out
          Headcount - - 2 - no
          Elimination - Engineer - dodgeball rule (catch = out) - 2 - no
          Dealer's Choice - Losing team picks upon their 4th loss - tbd - tbd
          -half-time- (all players must exit the arena)
          Elimination - 2 barriers horizonatally in the back - 2 - no
          Jailbreak - - 0 - Yes
          Headcount - - 0 - no
          YOLO - hit = 0 - 0 - no
          Dog Eat Dog -  - 0 - no
        </span>
      </li>
      <li>
        <p>Infractions</p>
        <span v-if="show">
          Verbal warnings: Used for smaller offences that do not have a major impact on gameplay and infractions that may have been done by accident or that can be disputed as an accident. These are issued at the ref’s discretion.
 
          A player can receive a Yellow card for committing any of the following offences:
          Committing an offence after receiving a verbal warning about the same action or similar
          Taking more than one arrow from Safety Zone, or swiping more onto your side
          Guilty of unsporting behavior (not going out when tagged)
          Affecting play when tagged out (Firing an arrow, blocking targets or players, hindrance by slow walking etc)
          Continued complaining or arguing with refs; yelling over the field of play at the opposition
          Knocking over the targets on your side, or causing a major shift to the targets that affects play
          Any play deemed by the referee to be dangerous to other players or otherwise unsafe
          
          A player can receive a Red card for committing any of the following offences:
          Two yellow cards in one match equals an automatic red card
          Aggressive behavior towards players, ref or staff
          Any violent or physical contact with another player, ref or staff
          
          ONLY EMPLOYEES ARE TO STRING AND UNSTRING BOWS. ANY PLAYER FOUND TWISTING STRINGS OR MANIPULATING EQUIPMENT IN AN UNSAFE MANNER WILL FORFEIT THE REMAINDER OF THE SEASON. 

          Consequences
          During the match: A player who receives a yellow card may continue to play in the match but will start on the sideline for the game following any yellow card. The team will start minus one player but can revive back to their full strength as soon as possible. If a player receives a red card, they are immediately dismissed from the field of play and can play no further part in the match. The player who is dismissed cannot be replaced; his team must also play the remainder of the game with one fewer player on the field.
          
          Post-match: Collecting a total of Two (2) Red Cards or four (4) Yellow Cards throughout the season will result in that player missing the week following the final card. If infractions are deemed serious enough by the league, larger suspensions or eviction will be introduced and issued without refund.
        </span>
      </li>
    </ul>
  </div>  
</template>

<script>
  export default {
    name: 'Rules',
    data() {
      return {
        show: false,
        oneOpen: false
      }
    },
    methods: {
      transi() {
        if (this.oneOpen) {
          // closeOpenedMenu
        }
        this.show = !this.show;
      }
    }
  }
</script>

<style>
  h2 {
    padding-left: 12px;
    padding-bottom: 16px;
  }

  li {
    border: 1px solid black;
    font-size: 20px;
    padding: 12px 24px;
    cursor: pointer;
  }

  li span {
    border-top: 1px solid green;
    display: inline-block;
    width: 100%;
    padding-top: 8px;
    font-size: 16px;
  }

  .slide-fade-enter-active {
    transition: all .6s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s ease-out;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-30px);
    opacity: 0;
  }
</style>
