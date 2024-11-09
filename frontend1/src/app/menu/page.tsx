"use client";
import React, { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import { AppButton } from "@/components/AppButton";

export default function Menu() {
  // Define the food and drinks menu items with categories
  const foodItems = [
    {
      category: "Bar Titbits",
      description: "",
      image: "/menu6.svg",
      items: [
        {
          name: "French Fries",
          description: "Plain/Peri Peri/Cheesey",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Garlic Bread",
          description: "Plain/Cheese",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Potato Wedges",
          description: "Plain/Peri Peri",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Mumbaiya Corn Bhel",
          description: "",
          price: "295",
          veg: "green",
        },
        {
          name: "Peanut Masala",
          description: "",
          price: "275",
          veg: "green",
        },
        {
          name: "Peri Peri Chana chat",
          description: "",
          price: "275",
          veg: "green",
        },
        {
          name: "Chicken 65",
          description: "",
          price: "445",
          veg: "red",
        },
        {
          name: "Grilled fish skewers",
          description: "",
          price: "495",
          veg: "red",
        },
        {
          name: "Beer batter fish fingers",
          description: "",
          price: "575",
          veg: "red",
        },
        {
          name: "Butter chicken pav",
          description: "",
          price: "345",
          veg: "red",
        },
        {
          name: "Keema bao",
          description: "",
          price: "445",
          veg: "red",
        },
      ],
    },
    {
      category: "Soups",
      description: "",
      image: "/menu6.svg",
      items: [
        {
          name: "Thyme infused wild mushroom soup",
          description: "CREAMY & RICH FROTH OF FIELD FRESH MUSHROOMS",
          price: "295/345",
          veg: "green",
        },
        {
          name: "TOMATO BASIL SOUP VEG/CHICKEN",
          description: "BASIL FLAVORED TOMATO BROTH IS EVERYONE'S CHOICE",
          price: "295/345",
          veg: "black",
        },
        {
          name: "TIBETIAN THUPKA VEG/CHICKEN",
          description:
            "A WARM HEARTY BOWL OF SOUP WITH VEG & CHICKEN DUMPLINGS",
          price: "295/345",
          veg: "black",
        },
        {
          name: "SWEET CORN SOUP VEG/CHICKEN",
          description: "THIS SOUP IS SURE TO WARM HEARTS & STOMACHS!!!!",
          price: "295/345",
          veg: "black",
        },
        {
          name: "MANCHOW SOUP VEG/CHICKEN",
          description: "ONE OF THE MOST POPULAR INDO-CHINESE SOUP",
          price: "295/345",
          veg: "black",
        },
      ],
    },
    {
      category: "GOURMET HEALTHY SALADS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "FIGS AND APRICOT",
          description:
            "FIGS AND APRICOT MIXED WITH ORGANIC GREENS & BALSAMIC VINAIGRETTE MAPLE DRESSING",
          price: "395",
          veg: "green",
        },
        {
          name: "FATTOUSH",
          description:
            "MEDITERRANEAN GREENS TOSSED WITH POMEGRANATE AND SUMMER GARDEN DRESSING",
          price: "395",
          veg: "green",
        },
        {
          name: "WATERMELON FETA CHEESE",
          description:
            "SALAD TOSSED WITH WATERMELON, POMEGRANATE AND VINAIGRETTE TOPPED WITH CRUMBLED FETA",
          price: "395",
          veg: "green",
        },
        {
          name: "ZESTY AVOCADO QUINOA SALAD",
          description:
            "SUPER FOOD THAT'S EASY TO LOVE, ONLY WHEN PAIRED WITH ORGANIC GREENS AND FRESH FRUITS",
          price: "525",
          veg: "green",
        },
        {
          name: "FRESH GARDEN GREEN SALAD",
          description: "CUCUMBER, ONION, TOMATO, CARROT",
          price: "245",
          veg: "green",
        },
        {
          name: "CLASSIC CAESAR VEG/CHICKEN",
          description: "FRESH GREENS TOSSED WITH CAESAR DRESSING & CROUTONS",
          price: "395/445",
          veg: "black",
        },
      ],
    },
    {
      category: "WHOLESOME SHARING PIATIERS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "VEG MEZZE PLATTER",
          description:
            "HUMMUS, FALAFEL, CHEESE SAMBOUSEK, TZATZIKI, MUKHALIL, BABA GANOUSH, PITA, LAVASH AND GREEK SALAD",
          price: "895",
          veg: "green",
        },
        {
          name: "NON-VEG MEZZE PLATTER",
          description:
            "MUTTON KIBBEH, HUMMUS, CHICKEN SAMBOUSEK, TZATZIKI, BABA GANOUSH, MUKHALIL, PITA, LAVASH AND GREEK SALAD",
          price: "995",
          veg: "red",
        },
        {
          name: "TANDOORI VEG PLATTER",
          description:
            "PANEER TIKKA, DAHI KE KEBAB, TANDOORI MUSHROOM & VEG MALAI SEEKH",
          price: "895",
          veg: "green",
        },
        {
          name: "TANDOORI NON-VEG PLATTER",
          description:
            "MURGH MALAI TIKKA, MURGH ANGARA, KASAUNDI MACHCHI & MUTTON SEEKH",
          price: "995",
          veg: "red",
        },
      ],
    },
    {
      category: "SOURDOUGH TOASTS/BRUSCHETTAS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "SCHEZWAN MUSHROOM SOURDOUGH TOAST",
          description:
            "TOASTED SOURDOUGH BREAD TOPPED WITH BASIL HUMMUS, SAUTÉED MUSHROOMS, ROCKET LEAF & CHILLY MAYO",
          price: "495",
          veg: "green",
        },
        {
          name: "AVOCADO SOURDOUGH TOAST",
          description:
            "TOASTED SOURDOUGH BREAD WITH MARINATED AVOCADO CHERRY TOMATOES AND FETA CHEESE",
          price: "495",
          veg: "green",
        },
        {
          name: "TOMATO MOZZARELLA & BASIL BRUSCHETTAS",
          description:
            "GARLIC BREAD TOASTED & TOPPED WITH TOMATO BASIL & CHEESE",
          price: "345",
          veg: "green",
        },
        {
          name: "SMOKE SALMON NICOISE TOAST",
          description:
            "TOPPED WITH PESTO, BOILED EGGS, CAPERS, CREAM CHEESE, CHERRY TOMATOES, ROCKET LEAF & OLIVES",
          price: "795",
          veg: "red",
        },
        {
          name: "GRILLED ROSEMARY CHICKEN BRUSCHETTAS",
          description:
            "TOASTED GARLIC BREAD TOPPED WITH DICED GRILLED CHICKEN WITH MELTED CHEESE",
          price: "395",
          veg: "red",
        },
      ],
    },
    {
      category: "MEDITERRANEAN",
      description:
        "SERVED WITH HUMMUS, MUKHALIL, MARINATED OLIVES AND FATTOUSH",
      image: "/menu10.svg",
      items: [
        {
          name: "CLASSIC FALAFEL",
          description: "HUMMUS, QUINOA, SMOKED PEPPERS, TZATZIKI",
          price: "695",
          veg: "green",
        },
        {
          name: "VEGETABLE SHISH TOUK",
          description: "COTTAGE CHEESE, ZUCCHINI, ONION, BELL PEPPERS",
          price: "695",
          veg: "green",
        },
        {
          name: "COTTAGE CHEESE SHAWARMA",
          description:
            "TORTILLA, LETTUCE, TURKISH COTTAGE CHEESE, ONION, BELL PEPPERS, GARLIC AIOLI",
          price: "695",
          veg: "green",
        },
        {
          name: "PANEER CHELO KEBAB",
          description: "MARINATED COTTAGE CHEESE, QUINOA PILAF, POMEGRANATE",
          price: "695",
          veg: "green",
        },
        {
          name: "CHICKEN SHISH TOUK",
          description:
            "MARINATED CHICKEN CUBES, PEPPERS MEDLEY, ONION, PITA BREAD",
          price: "795",
          veg: "red",
        },
        {
          name: "TURKISH ADANA KEBAB",
          description:
            "MINCED LAMB KEBAB, QUINOA, TURKISH SPICES, CHARRED PEPPERS, GARLIC AIOLI",
          price: "795",
          veg: "red",
        },
        {
          name: "CHICKEN SHAWARMA",
          description:
            "TORTILLA, TURKISH CHICKEN,ONION, BELL PEPPERS, GARLIC AOLI",
          price: "795",
          veg: "red",
        },
        {
          name: "CHICKEN CHELO KEBAB",
          description: "SUCCULENT CHICKEN MORSELS, QUINOA PILAF, POMEGRANATE",
          price: "795",
          veg: "red",
        },
      ],
    },
    {
      category: "EUROPEAN",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "TEX-MEX LOADED NACHOS VEG",
          description:
            "CORN CHIPS WITH MELTED CHEESE, JALAPENO, REFRIED BEANS SERVED WITH SALSA, SOUR CREAM",
          price: "495",
          veg: "green",
        },
        {
          name: "MEXICAN VEGETABLE QUESADILLAS",
          description:
            "THIS IS A PERFECT APPETIZER & GREAT TO SHARE WITH FRIENDS",
          price: "495",
          veg: "green",
        },
        {
          name: "CREAMY EXOTIC VEG VOL-AU-VENT",
          description:
            "PUFF PASTRY FILLED WITH MUSHROOM, CORN AND CHEESE WITH CHIPOTLE MAYO",
          price: "445",
          veg: "green",
        },
        {
          name: "PERI PERI ONION RINGS",
          description:
            "CRAFTED WITH FINELY SLICED ONION RINGS IN A DELICIOUS BATTER WITH A HINT OF PERI PERI",
          price: "395",
          veg: "green",
        },
        {
          name: "PANEER TIKKA TACOS WITH ROASTED TOMATO SALSA",
          description:
            "A WONDERFUL INDO-MEXICAN FUSION, COMBINING PANEER AND TOPPED WITH ALL THE GOOD THINGS!",
          price: "495",
          veg: "green",
        },
        {
          name: "CHICKEN WINGS (BBQ/BUFFALO)",
          description:
            "CRISPY BAKED CHICKEN WINGS TOSSED IN TRADITIONAL BBQ/BUFFALO SAUCE AND CELERY STICKS",
          price: "595",
          veg: "red",
        },
        {
          name: "CHICKEN SAUSAGE & HAM VOL-AU-AENT",
          description:
            "CREAMY CHICKEN SAUSAGE & HAM FILLED IN PUFF PASTRY WITH CHIPOTLE MAYO",
          price: "495",
          veg: "red",
        },
        {
          name: "TEX-MEX LOADED NACHOS CHICKEN",
          description:
            "CORN CHIPS WITH MELTED CHEESE, CHICKEN, JALAPENO, BEANS SERVED WITH SALSA, SOUR CREAM",
          price: "595",
          veg: "red",
        },
        {
          name: "KICK IN SPICY CHICKEN TACOS WITH ROASTED TOMATO SALSA",
          description:
            "MOUTH-WATERING INDO-MEXICAN FLAVORS WITH SPICY CHICKEN AND TOPPED WITH VEGGIES",
          price: "595",
          veg: "red",
        },
        {
          name: "CHARISSA CHICKEN STRIPS",
          description:
            "CHICKEN STRIPS DIPPED IN SPICY BATTER AND CRUMB FRIED WITH SPICY HARISSA",
          price: "595",
          veg: "red",
        },
        {
          name: "CLASSIC FISH N CHIPS",
          description:
            "TRADITIONAL STYLE RECIPE, FISH FILLETS BATTERED AND DELIGHTFULLY GOLDEN BROWN SERVED WITH FRIES AND TARTARE",
          price: "675",
          veg: "red",
        },
        {
          name: "BUTTER GARLIC TIGER PRAWNS",
          description:
            "TIGER PRAWNS SEARED IN BUTTER, CREAM AND GARLIC WITH MASH POTATO",
          price: "795",
          veg: "red",
        },
        {
          name: "SMOKED CHICKEN QUESADILLAS",
          description:
            "A MIXTURE OF SMOKY CHICKEN AND CHEESE TO CREATE ONE OF THE BEST QUESADILLAS EVER!!!!",
          price: "595",
          veg: "red",
        },
      ],
    },
    {
      category: "CLAY OVEN",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "KHUMB KI GALOUTI",
          description:
            "MINCED MUSHROOM CAKES MADE LUCKNOWEE STYLE WITH ULTA TAWA PARATHA",
          price: "595",
          veg: "green",
        },
        {
          name: "TANDOORI KHUMB RED CHEDDAR FONDUE",
          description:
            "CHEESE STUFFED MUSHROOMS MARINATED IN TANDOORI MASALA, FINISHED IN TANDOOR AND TOPPED WITH RED CHEDDAR FONDUE",
          price: "495",
          veg: "green",
        },
        {
          name: "SOYA CHAP ACHARI/MALAI/TANDOORI",
          description: "CHOOSE YOUR CHOICE OF MARINATION",
          price: "475",
          veg: "green",
        },
        {
          name: "HARISSA PANEER TIKKA",
          description:
            "TUNISIAN HARISSA MARINATED OVERNIGHT PANEER, FINISHED IN CLAY OVEN",
          price: "525",
          veg: "green",
        },
        {
          name: "PANEER TIKKA DEGGI MIRCH/AFGHANI",
          description:
            "PANEER MARINATED IN YOUR CHOICE & FINISHED IN CLAY OVEN",
          price: "525",
          veg: "green",
        },
        {
          name: "SADABAHAR MALAI SEEKH",
          description:
            "HAND PICKED VEGETABLES BLENDED WITH PANEER, CORN, CASHEWNUTS & SPICES, PLACED ON SEEKH & COOKED IN TANDOOR",
          price: "585",
          veg: "green",
        },
        {
          name: "PAPAD CRUSTED DAHI KE KEBAB",
          description:
            "AN UNUSUAL PREPARATION OF YOGURT THAT HAS BEEN MIXED CRUSHED PAPAD, HAVING FLAVOR OF LIGHT SPICES WITH MINT CHUTNEY",
          price: "495",
          veg: "green",
        },
        {
          name: "TANDOORI CHICKEN WINGS",
          description:
            "CHICKEN WINGS MARINATED IN TANDOORI SPICES, HUNG CURD & FINISHED IN CHARCOAL OVEN",
          price: "595",
          veg: "red",
        },
        {
          name: "BURRAH KEBAB",
          description:
            "A MESMERIZING JEWEL FROM THE MUGHLAI KITCHEN THE BURRAH OR BIG KEBAB IS MELANGE OF TENDER LAMB CHOPS EXQUISITELY MARINATED WITH ROYAL CUMIN HUNG CURD AND TRADITIONAL SPICES, PASSIONATELY GRILLED OVER CHARCOAL GRILL",
          price: "895",
          veg: "red",
        },
        {
          name: "CLUCKNOWEE MUTTON GALOUTI",
          description:
            "MOUTH MELTING MINCED MUTTON BLENDED WITH LUCKNOWEE SPICES AND DESI GHEE SERVED ON ULTA TAWA PARATHA",
          price: "795",
          veg: "red",
        },
        {
          name: "GILAFI MUTTON SEEKH KEBAB",
          description:
            "LAMB MINCE MIXED WITH SPICES AND CHEESE, FINISHED WITH A GILAF OF ONION AND CAPSICUM, THEN COOKED IN CLAY OVEN",
          price: "695",
          veg: "red",
        },
        {
          name: "TANDOORI CHICKEN HALF/FULL",
          description:
            "WHOLE CHICKEN MARINATED IN SPICES SELECTED FROM DILLI 6 & FINISHED IN CLAY OVEN",
          price: "475/745",
          veg: "red",
        },
        {
          name: "PESHAWARI CHICKEN TANGRI",
          description:
            "TANDOORI SPICED CHICKEN DRUMSTICKS STUFFED WITH CHEESE, MARINATED IN HUNG CURD AND ARE FINISHED TO JUICY PERFECTION IN THE CLAY OVEN",
          price: "595",
          veg: "red",
        },
        {
          name: "BHATTI KA MURGH HALF/FULL",
          description:
            "A GEM FROM THE STREETS OF PUNJAB WHERE THE CHICKEN IS MARINATED TWICE & COOKED IN TANDOOR",
          price: "475/745",
          veg: "red",
        },
        {
          name: "MURGH MALAI TIKKA",
          description:
            "CHICKEN THIGHS IN CASHEW NUT & CREAM AND FINISHED IN CHARCOAL OVEN",
          price: "595",
          veg: "red",
        },
        {
          name: "CHICKEN SHARABI TIKKA",
          description:
            "AFTER HOUR'S PATRONS FAVOURITE CHICKEN MARINATED IN RUM COOKED IN CHARCOAL OVEN AND FLAMBE IN RUM",
          price: "645",
          veg: "red",
        },
        {
          name: "MURGH SEEKH KEBAB",
          description:
            "CREAM AND CHEESE MARINATED BONELESS CHICKEN FINISHED IN CLAY OVEN",
          price: "595",
          veg: "red",
        },
        {
          name: "TANDOORI POMFRET",
          description:
            "WHOLE POMFRET MARINATED IN SPICY TANDOORI YOGURT & COOKED TO PERFECTION IN TANDOOR",
          price: "1095",
          veg: "red",
        },
        {
          name: "KASAUNDI MACHCHI TIKKA",
          description:
            "SOLE FISH CUBES MARINATED WITH KASAUNDI & WHOLE INDIAN SPICES",
          price: "745",
          veg: "red",
        },
        {
          name: "THAI RED CHICKEN TIKKA, WASABI TARTARE",
          description:
            "TANDOORI CHICKEN TIKKA LAYERED WITH THAI RED CURRY PASTE SERVED WITH WASABI TARTARE",
          price: "695",
          veg: "red",
        },
      ],
    },
    {
      category: "ORIENTAL",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "THAI STYLE SPRING ROLLS",
          description:
            "STIR FRIED VEGETABLES FILLED IN ROLLS, GOLDEN FRIED & SERVED WITH SWEET CHILLY SAUCE",
          price: "495",
          veg: "green",
        },
        {
          name: "CHEESE CIGAR ROLL WITH SPICY HARISSA",
          description:
            "INCREDIBLY DELICIOUS CHEESE STUFFED CIGARS WITH HARISSA",
          price: "595",
          veg: "green",
        },
        {
          name: "CRISPY FRIED CHILLY PANEER",
          description:
            "PANEER CUBES DEEP FRIED, TOSSED IN TRADITIONAL CHILLY SAUCE",
          price: "495",
          veg: "green",
        },
        {
          name: "KOREAN VEGETABLE SKEWERS",
          description:
            "ASSORTED VEGETABLES IN KOREAN MARINADE WITH ROASTED SESAME DIP",
          price: "495",
          veg: "green",
        },
        {
          name: "EXOTIC ASIAN GREENS CHILLY GARIC / BLACK BEAN / SCHEZWAN",
          description: "ASIAN GREEN MIX VEGGIES TOSSED IN YOUR CHOICE OF SAUCE",
          price: "495",
          veg: "green",
        },
        {
          name: "CRISPY THAI MUSHROOMS",
          description:
            "BEST IDEA BY CHANCE, CRISPY FRIED MUSHROOM TOSSED WITH THAI HERBS",
          price: "495",
          veg: "green",
        },
        {
          name: "HONEY CHILLY SESAME POTATO",
          description:
            "CRISPY FRIED POTATO STRIPS TOSSED IN HONEY CHILLY SAUCE SPRINKLED WITH ROASTED SESAME SEEDS",
          price: "395",
          veg: "green",
        },
        {
          name: "SCHEZWAN STYLE SALT N PEPPER",
          description: "CRISPY VEGETABLES TOSSED WITH FRIED GARLIC & CHINESE WINE, SCHEZWAN PEPPER",
          price: "",
          veg: "green",
        },
        {
          name: "CRISPY FRIED CORN KERNELS",
          description: "A SIMPLE CORN KERNEL DISH WITH BASIC SALT N PEPPER, YET IT TASTES DELICIOUS",
          price: "",
          veg: "green",
        },
        {
          name: "GOLDEN FRIED MAGIC PRAWNS",
          description: "GORGEOUS GOLDEN FRIED PRAWNS ARE OUT-AN-OUT WINNER FOR A ROCKING PARTY WITH COCKTAIL SAUCE",
          price: "",
          veg: "red",
        },
        {
          name: "SICHUAN STYLE BURNT GARLIC CHICKEN",
          description: "SPICY SCHEZWAN PEPPER AND FIERY CHILLIES",
          price: "",
          veg: "red",
        },
        {
          name: "CRISPY FRIED FISH CHILLY GARLIC/SCHEZWAN",
          description: "ASK YOUR SERVER TO MAKE IT YOUR WAY",
          price: "",
          veg: "red",
        },
        {
          name: "",
          description: "",
          price: "",
          veg: "red",
        },
        {
          name: "",
          description: "",
          price: "",
          veg: "red",
        },
        {
          name: "",
          description: "",
          price: "",
          veg: "red",
        },
        {
          name: "",
          description: "",
          price: "",
          veg: "red",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
    {
      category: "",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "",
          description: "",
          price: "",
          veg: "green",
        },
      ],
    },
  ];

  const drinksItems = [
    {
      category: "Signature Cocktails",
      description: "",
      image: "/menu12.jpg",
      items: [
        {
          name: "AFTER HOURS SPECIAL",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "ORANGE MINT TO BE",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "DRUNK IN LOVE",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "PENICILLIN",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "PINK YOUR MOMENT",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "VALLEY OF SEX",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "THE SOUTHERN SOMRAS",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "HEART AND SOUL",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "BERRY HAPPY TOGETHER MARGARITA",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "RED BULL ENERGY DRINK VODKA",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "RED BULL YELLOW EDITION GIN",
          description: "",
          price: "645",
          veg: "",
        },
      ],
    },
    {
      category: "Forever Classic",
      description: "",
      image: "/gallery2.jpg",
      items: [
        {
          name: "COSMOPOLITAN",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "PINACOLADA",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "DAIQUIRI - CLASSIC, W/MELON, STRAWBERRY",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "BLOODY MARY",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "OLD FASHION",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "MARTINI - CLASSIC, GIMLET, GIBSON, G/APPLE",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "LIIT - CLASSIC, BEACH, SKY",
          description: "",
          price: "675/ 2490/ 950",
          veg: "",
        },
        {
          name: "LIIT - ELECTRIC",
          description: "",
          price: "745/ 2690/ 1045",
          veg: "",
        },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
      ],
    },
  ];

  const [activeMenu, setActiveMenu] = useState("food");

  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        <div className="bg-app-purple py-16 flex justify-center">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
            <a onClick={() => setActiveMenu("food")}>
              <AppButton
                color={
                  activeMenu === "food"
                    ? "border-app-purple"
                    : "border-app-yellow"
                }
                fill={activeMenu === "food" ? "bg-app-yellow" : "bg-app-purple"}
                text={"Food Menu"}
                fontcolor={
                  activeMenu === "food" ? "text-app-purple" : "text-app-yellow"
                }
                hover_color={
                  activeMenu === "food"
                    ? "hover:border-app-purple"
                    : "hover:border-app-yellow"
                }
                hover_fill={
                  activeMenu === "food"
                    ? "hover:bg-app-yellow"
                    : "hover:bg-app-purple"
                }
                hover_fontcolor={
                  activeMenu === "food"
                    ? "hover:text-app-purple"
                    : "hover:text-app-yellow"
                }
              />
            </a>
            <a onClick={() => setActiveMenu("drinks")}>
              <AppButton
                color={
                  activeMenu === "drinks"
                    ? "border-app-purple"
                    : "border-app-yellow"
                }
                fill={
                  activeMenu === "drinks" ? "bg-app-yellow" : "bg-app-purple"
                }
                text={"Drinks Menu"}
                fontcolor={
                  activeMenu === "drinks"
                    ? "text-app-purple"
                    : "text-app-yellow"
                }
                hover_color={
                  activeMenu === "drinks"
                    ? "hover:border-app-purple"
                    : "hover:border-app-yellow"
                }
                hover_fill={
                  activeMenu === "drinks"
                    ? "hover:bg-app-yellow"
                    : "hover:bg-app-purple"
                }
                hover_fontcolor={
                  activeMenu === "drinks"
                    ? "hover:text-app-purple"
                    : "hover:text-app-yellow"
                }
              />
            </a>
          </div>
        </div>

        <div className="bg-white py-20 px-4 lg:px-0">
          <div className="lg:max-w-screen-lg mx-auto">
            <div className="lg:pl-8 pt-4 lg:pt-0">
              {(activeMenu === "food" ? foodItems : drinksItems).map(
                (category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="py-8 w-full lg:w-full lg:flex"
                  >
                    {/* Conditionally render image before or after the category text */}
                    {category.image && categoryIndex % 2 === 0 && (
                      <div className="lg:w-2/5 mb-4 lg:mb-0 mr-8 relative min-w-full lg:min-w-fit max-h-screen">
                        <Image
                          src={category.image}
                          width={300}
                          height={300}
                          alt={category.category}
                          priority
                          className="w-full h-full object-cover object-center"
                          style={{ objectPosition: "center center" }} // Ensure the image is centered
                        />
                      </div>
                    )}

                    {/* Category text */}
                    <div className="lg:w-3/5 pr-4">
                      <p className="text-2xl font-bold text-black capitalize app-header">
                        {category.category.toLowerCase()}
                      </p>
                      <p className="text-sm text-app-gray capitalize">
                        {category.description.toLowerCase()}
                      </p>
                      {category.items.map((item, index) => (
                        <div key={index} className="flex py-4">
                          <div className="pr-2">
                            <div className={`${item.veg}-dot-container`}>
                              <div className={`${item.veg}-dot`}></div>
                            </div>
                          </div>
                          <div className="w-full flex items-end mb-2">
                            <div>
                              <p className="text-xl app-header font-bold capitalize">
                                {item.name.toLowerCase()}
                              </p>
                              <p className="text-sm text-app-gray capitalize">
                                {item.description.toLowerCase()}
                              </p>
                            </div>
                            <div className="flex-1 border-b border-dashed border-gray-400"></div>
                            <div className="w-1/6 flex items-end justify-end font-bold app-header text-xl">
                              {item.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Image after text for odd-indexed categories */}
                    {category.image && categoryIndex % 2 !== 0 && (
                      <div className="lg:w-2/5 mt-4 lg:mt-0 relative min-w-full lg:min-w-fit max-h-screen">
                        <Image
                          src={category.image}
                          width={300}
                          height={300}
                          alt={category.category}
                          priority
                          className="w-full h-full object-cover object-center"
                          style={{ objectPosition: "center center" }} // Ensure the image is centered
                        />
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
