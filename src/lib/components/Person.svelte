<script>
  export let Member;
  export let themecolor;
  export let tab;

  let textsize = 0.9;
  let len = Member.bio.length;
  if (len > 400) {
    textsize = 0.6;
  } else if (len > 300) {
    textsize = 0.7;
  } else if (len > 200) {
    textsize = 0.8;
  }

  let namesize = 1.8;
  let namelen = Member.displayname.length;
  if (namelen > 18) {
    namesize = 1.6;
  } else if (namelen < 16) {
    namesize = 2.0;
  } else if (namelen < 14) {
    namesize = 2.2;
  }

  let rgbthemecolor = hexToRgb(themecolor);

  // export let position;
  import BoopAction from "$lib/components/BoopAction.svelte";
  import Text from "$lib/components/Text.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import PanelBox from "$lib/components/PanelBox.svelte";
  import Tooltip from "$lib/components/Tooltip.svelte";
  import { LightenDarkenColor, hexToRgb } from "$lib/utils/Colors.svelte";
	import { lazyLoad } from "$lib/lazyload";
</script>

<div class="panel-box">
  <div class="flip-card">
    <div class="card-side-inner">
      <div class="card-side-front person-details">
        <a
          href="mailto:{Member.email}?subject=Mail to {Member.namef} {Member.namel}"
          style="position:absolute; top:8px; right:10px;"
        >
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            <i
              class="fa-solid fa-envelope icon"
              style="font-size:2.2em; color: {LightenDarkenColor(
                themecolor,
                20
              )}"
            />
          </BoopAction>
        </a>
        <div class="person">
          <div class="person-pic">
            <img
              use:lazyLoad
              class="person-img"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              data-src={ ( "/about-us-images/serious/" + Member.pic1path)}
              alt={Member.namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 25px;"
            />
          </div>
          <div class="icons">
            <Tooltip title="Design">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.d == true}
                  <i class="fa-solid fa-pen-fancy icon design" />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Business Engagement">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.be == true}
                  <i
                    class="fa-solid fa-people-group icon community-engagement"
                  />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Curriculum Development">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.cd == true}
                  <i
                    class="fa-solid fa-chalkboard-user icon curriculum-development"
                  />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Problem Writing">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.pw == true}
                  <i class="fa-solid fa-calculator icon problem-writing" />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Technology">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.t == true}
                  <i class="fa-solid fa-computer icon technology" />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Tournament Development">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.td == true}
                  <i
                    class="fa-solid fa-pen-ruler icon tournament-development"
                  />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Video Production">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.vp == true}
                  <i class="fa-solid fa-camera-retro icon video-production" />
                {/if}
              </BoopAction>
            </Tooltip>
          </div>
          <p>
            <span
              class="name"
              style="font-size: {namesize}em; color:{themecolor};"
            >
              {Member.displayname}
            </span>
            {#if Member[tab.role + "role"]}
              <br />
              <span
                class="role"
                style="font-size: 1.5em; color:{LightenDarkenColor(
                  themecolor,
                  50
                )};"
              >
                {Member[tab.role + "role"]}
              </span>
            {/if}
          </p>
        </div>
      </div>
      <div class="card-side-back person-details">
        <a
          href="mailto:{Member.email}?subject=Mail to {Member.namef} {Member.namel}"
          style="position:absolute; top:8px; right:10px;"
        >
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            <i
              class="fa-solid fa-envelope icon"
              style="font-size:2.2em; color: {LightenDarkenColor(
                themecolor,
                20
              )}"
            />
          </BoopAction>
        </a>

        <div class="person-pic">
          {#if Member.pic2path}
            <img
              use:lazyLoad
              class="person-img"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              data-src={( "/about-us-images/silly/" + Member.pic2path)}
              alt={Member.namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 25px; padding-left:0px"
            />
          {:else}
            <img
              use:lazyLoad
              class="person-img"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              data-src={( "/about-us-images/serious/" + Member.pic1path)}
              alt={Member.namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 25px; padding-left:0px"
            />
          {/if}
        </div>

        <div
          style="display:flex;align-items:right;margin-top:0.3em;margin-bottom:0em;position:relative;"
        >
          <Tooltip title="Design">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if Member.d == true}
                <i class="fa-solid fa-pen-fancy icon design" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Business Engagement">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if Member.be == true}
                <i class="fa-solid fa-people-group icon community-engagement" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Curriculum Development">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if Member.cd == true}
                <i
                  class="fa-solid fa-chalkboard-user icon curriculum-development"
                />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Problem Writing">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if Member.pw == true}
                <i class="fa-solid fa-calculator icon problem-writing" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Technology">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if Member.t == true}
                <i class="fa-solid fa-computer icon technology" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Tournament Development">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if Member.td == true}
                <i class="fa-solid fa-pen-ruler icon tournament-development" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Video Production">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if Member.vp == true}
                <i class="fa-solid fa-camera-retro icon video-production" />
              {/if}
            </BoopAction>
          </Tooltip>
        </div>
        <p class="bio" style="font-size: {textsize}em;">
          {Member.bio}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .panel-box {
    width: 20;
    height: 20;
    margin: 5px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .person {
    display: grid;
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .person-img {
    margin: 1px;
    max-height: 100%;
    padding-top: 2px;
  }
  .person-pic {
  }
  .person-details {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .icon {
    font-size: 1.2em;
    margin: 3px;
  }

  .bio {
    margin: 5px;
  }

  .name {
    font-size: 1.8em;
    font-weight: 400;
    height: 40px;
  }

  .icons {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
  }

  .icon:hover {
    filter: brightness(90%);
  }
</style>
