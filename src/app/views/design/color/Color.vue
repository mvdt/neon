<template>
  <neon-card>
    <neon-card-header>
      <h1 class="neon-h3">Colors</h1>
    </neon-card-header>
    <neon-card-body>
      <neon-anchor id="introduction" />
      <h2 class="neon-h4">Introduction</h2>
      <p>
        Neon uses the concept of <strong>Functional colors</strong> where colors have semantic meaning, e.g. a brand
        color or a warning color.
      </p>
      <p>
        Throughout Neon there are many components supporting colors. When this is the case, the component supports each
        of the functional colors which allows great flexibility for designers and developers to quickly create the look
        they want without any hassle.
      </p>
      <p>
        Each functional color palette is generated from a single reference color. From this the light and dark color
        steps are generated (l1-l5 & d1-d5). Another important feature of the palette generator is ensuring accessible
        contrast ratios of the colors when used in combination with text in light and dark modes.
      </p>
      <p>
        It is possible to override the reference colors that palettes are generated from by overriding the color
        variables in the theme's variable file. E.g. to override the primary color set the variable
        <strong>$color-primary</strong> in your SASS overrides file.
      </p>
      <p>
        Alternatively, if you would like to change an entire palette you can do so by overriding the palette map, e.g.
        to override the info palette in SASS set:
      </p>
      <editor language="scss" :read-only="true" :value="colorPalette" />
    </neon-card-body>
    <neon-card-body class="color-palettes">
      <neon-anchor id="brand-palettes" />
      <h2 class="neon-h4">Brand palettes</h2>
      <h3 class="neon-h5">brand</h3>
      <p>The palette for the main brand color.</p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`brandl${6 - i}`"
            :class="`neon-brand-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`brandd${i}`"
            :class="`neon-brand-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
      <h3 class="neon-h5">primary</h3>
      <p>The palette for the primary color used in an application.</p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`primaryl${6 - i}`"
            :class="`neon-primary-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`primaryd${i}`"
            :class="`neon-primary-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
    </neon-card-body>
    <neon-card-body class="color-palettes">
      <neon-anchor id="functional-palettes" />
      <h2 class="neon-h4">Functional palettes</h2>
      <h3 class="neon-h5">info</h3>
      <p>The color palette used to convey information in components (e.g. buttons, alerts, notes).</p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`infol${6 - i}`"
            :class="`neon-info-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`infod${i}`"
            :class="`neon-info-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
      <h3 class="neon-h5">success</h3>
      <p>The color palette used to indicate successful or positive actions.</p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`successl${6 - i}`"
            :class="`neon-success-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`successd${i}`"
            :class="`neon-success-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
      <h3 class="neon-h5">warn</h3>
      <p>The color palette used to indicate warnings.</p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`warnl${6 - i}`"
            :class="`neon-warn-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`warnd${i}`"
            :class="`neon-warn-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
      <h3 class="neon-h5">error</h3>
      <p>The color palette used to indicate dangerous or failed actions.</p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`errorl${6 - i}`"
            :class="`neon-error-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`errord${i}`"
            :class="`neon-error-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
    </neon-card-body>
    <neon-card-body class="color-palettes">
      <neon-anchor id="neutral-palettes" />
      <h2 class="neon-h4">Neutral palettes</h2>
      <h3 class="neon-h5">neutral</h3>
      <p>Used the most often, this is the default grayscale palette used across all components.</p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`neutrall${6 - i}`"
            :class="`neon-neutral-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`neutrald${i}`"
            :class="`neon-neutral-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
      <h3 class="neon-h5">high-contrast</h3>
      <p>
        A higher contrast grayscale palette which can be used for greater accessibility and higher impact without adding
        color.
      </p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`high-contrastl${6 - i}`"
            :class="`neon-high-contrast-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`high-contrastd${i}`"
            :class="`neon-high-contrast-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
      <h3 class="neon-h5">low-contrast</h3>
      <p>
        A lower contrast grayscale palette which can be used for more subtle components which shouldn't draw the user's
        attention.
      </p>
      <div class="color-list">
        <div class="color-list-section">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`low-contrastl${6 - i}`"
            :class="`neon-low-contrast-bg-color-l${6 - i}`"
          >
            {{ `l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`low-contrastd${i}`"
            :class="`neon-low-contrast-bg-color-d${i}`"
          >
            {{ `d${i}` }}
          </div>
        </div>
      </div>
      <neon-note color="warn"
        ><span
          ><strong>Note: </strong> the <em>low-contrast</em> palette doesn't provide adequate contrast ratio support for
          accessibility at all color steps. Use with care.</span
        ></neon-note
      >
    </neon-card-body>
    <neon-card-body>
      <neon-anchor id="color-classes" />
      <h2 class="neon-h4">Color classes</h2>
      <p>
        Neon provides convenience classes for text colors as well as the full complement of background colors for each
        palette
      </p>
      <h3 class="neon-h5">Text colors</h3>
      <example :example="example" />
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Color.ts"></script>
