<script setup lang="ts">
import IconLogo from "~/components/icons/IconLogo.vue";

const navigation = useNavigation()
const menu = useMenu()
const settings = useSettings()
const alternateLanguages = useAlternateLanguages()

const localePath = useLocalePath()
</script>

<template>
  <Bounded
    as="header"
    y-padding="sm"
  >
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
      <nav>
        <ul class="flex flex-wrap gap-6 md:gap-10">
          <li
            v-for="item in menu?.data.top_menu_links"
            :key="$prismic.asText(item.label)"
            class="font-semibold tracking-tight text-slate-800 text-xl cursor-pointer"
          >
            <PrismicLink :field="item.link">
              {{ $prismic.asText(item.label ) }}
            </PrismicLink>
          </li>
          <li
            v-for="lang in alternateLanguages"
            :key="lang.lang"
          >
            <PrismicLink :field="{ ...lang, link_type: 'Document' }">
              <span class="sr-only">{{ lang.lang }}</span>
              <span
                class="fi"
                :class="`fi-${lang.lang.substring(3).toLowerCase()}`"
              />
            </PrismicLink>
          </li>
        </ul>
      </nav>
      <NuxtLink :to="localePath('/')" class="logo cursor-pointer" title="bdtronic">
        <IconLogo
          :data="{ width: '143', height: '34', display: 'block' }"
        />
      </NuxtLink>
    </div>
  </Bounded>
</template>
