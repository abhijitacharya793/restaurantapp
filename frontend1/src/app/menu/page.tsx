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
          description:
            "CRISPY VEGETABLES TOSSED WITH FRIED GARLIC & CHINESE WINE, SCHEZWAN PEPPER",
          price: "495",
          veg: "green",
        },
        {
          name: "CRISPY FRIED CORN KERNELS",
          description:
            "A SIMPLE CORN KERNEL DISH WITH BASIC SALT N PEPPER, YET IT TASTES DELICIOUS",
          price: "495",
          veg: "green",
        },
        {
          name: "GOLDEN FRIED MAGIC PRAWNS",
          description:
            "GORGEOUS GOLDEN FRIED PRAWNS ARE OUT-AN-OUT WINNER FOR A ROCKING PARTY WITH COCKTAIL SAUCE",
          price: "795",
          veg: "red",
        },
        {
          name: "SICHUAN STYLE BURNT GARLIC CHICKEN",
          description: "SPICY SCHEZWAN PEPPER AND FIERY CHILLIES",
          price: "595",
          veg: "red",
        },
        {
          name: "CRISPY FRIED FISH CHILLY GARLIC/SCHEZWAN",
          description: "ASK YOUR SERVER TO MAKE IT YOUR WAY",
          price: "695",
          veg: "red",
        },
        {
          name: "TERIYAKI CHICKEN SKEWERS",
          description:
            "CHICKEN CUBES MARINATED IN TERIYAKI SAUCE ARE INCREDIBLY FLAVORFUL AND BURSTING WITH UMAMI AND SWEET-SALTY PERFECTION",
          price: "595",
          veg: "red",
        },
        {
          name: "THAI BASIL CHICKEN",
          description:
            "STIR FRIED CHICKEN WITH A MOUTHWATERING BALANCE OF SAVORY & SWEET AROMAS OF CARAMELIZED GARLIC & BASIL",
          price: "595",
          veg: "red",
        },
        {
          name: "ORIGINAL CHICKEN LOLLIPOP",
          description: "TOSSED IN TRADITIONAL SCHEZWAN SAUCE",
          price: "595",
          veg: "red",
        },
        {
          name: "CRISPY FRIED CHILLY CHICKEN",
          description: "CHICKEN MORSELS DEEP FRIED & TOSSED IN CHILI SAUCE",
          price: "595",
          veg: "red",
        },
      ],
    },
    {
      category: "DUMPLINGS",
      description: "(STEAMED/PAN TOSSED/SIZZIERS)",
      image: "/menu10.svg",
      items: [
        {
          name: "FUSION DUMPLINGS VEG/CHICKEN",
          description: "",
          price: "495/595",
          veg: "black",
        },
        {
          name: "THAI GREEN VEG DUMPLING",
          description: "",
          price: "495",
          veg: "green",
        },
        {
          name: "SPICY CORN & ASPARAGUS DUMPLING",
          description: "",
          price: "525",
          veg: "green",
        },
        {
          name: "WATERCHEST NUT AND CHEESE DUMPLING",
          description: "",
          price: "495",
          veg: "green",
        },
        {
          name: "CHICKEN THAI BASIL DUMPLING",
          description: "",
          price: "625",
          veg: "red",
        },
        {
          name: "SRIRACHA CHICKEN DUMPLING",
          description: "",
          price: "625",
          veg: "red",
        },
        {
          name: "PRAWN HAR GOW DUMPLING",
          description: "",
          price: "795",
          veg: "red",
        },
      ],
    },
    {
      category: "SUSHIS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "VEG CALIFORNIA ROLL",
          description: "",
          price: "575",
          veg: "green",
        },
        {
          name: "AVOCADO & PHILADELPHIA CHEESE ROLL",
          description: "",
          price: "595",
          veg: "green",
        },
        {
          name: "ZUCCHINI ROLL WITH HERBS & CHEESE",
          description: "",
          price: "575",
          veg: "green",
        },
        {
          name: "AVOCADO CARROT CUCUMBER MAKI ROLL",
          description: "",
          price: "595",
          veg: "green",
        },
        {
          name: "ASPARAGUS TEMPURA PICKLED CARROTS",
          description: "",
          price: "595",
          veg: "green",
        },
        {
          name: "TEMPURA SHRIMP ROLL",
          description: "",
          price: "895",
          veg: "red",
        },
        {
          name: "SMOKE SALMON & PHILADELPHIA CHEESE ROLL",
          description: "",
          price: "895",
          veg: "red",
        },
        {
          name: "SPICY CHICKEN ROLL",
          description: "",
          price: "645",
          veg: "red",
        },
        {
          name: "TERIYAKI CHICKEN ROLL",
          description: "",
          price: "645",
          veg: "red",
        },
      ],
    },
    {
      category: "CONTINENTAL MAINS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "GRILLED COTTAGE CHEESE STEAK CHIPOTLE/PERI PERI/BBQ",
          description: "SERVED WITH A MÉLANGE OF VEGGIES & MEXICAN RICE",
          price: "595",
          veg: "green",
        },
        {
          name: "MODERN GRILLED CHICKEN BLACK PEPPER/BBQ/PERI PERI",
          description:
            "SERVED ON A BED OF MEXICAN RICE, WITH CHOICE OF SAUCE AND SAUTÉED VEGGIES",
          price: "695",
          veg: "red",
        },
        {
          name: "HERB CRUSTED LAMB STEAK",
          description:
            "LAMB STEAK CRUSTED WITH HERBS TOPPED WITH BARBECUE SAUCE WITH ROASTED VEGETABLES & POTATO MASH",
          price: "895",
          veg: "red",
        },
        {
          name: "CAJUN ANGEL SHRIMPS",
          description:
            "SHRIMPS WRAPPED IN BACON STRIPS SEARED IN BUTTER WITH LOADS OF CAJUN SPICE SERVED WITH CAJUN CREAM SAUCE, HERB RICE AND CORN COB",
          price: "895",
          veg: "red",
        },
        {
          name: "MEDITERRANEAN GRILLED RED SNAPPER",
          description:
            "WHOLE RED SNAPPER RUBBED WITH MEDITERRANEAN SPICES SERVED WITH GRILLED VEGGGIES & MASH POTATOES",
          price: "795",
          veg: "red",
        },
        {
          name: "PERUVIAN GRILLED FISH",
          description:
            "GRILLED SOLE FISH SERVED WITH GRILLED ASPARAGUS, QUINOA PILAF TOPPED WITH FRIED EGG & LEMON BUTTER SAUCE",
          price: "745",
          veg: "red",
        },
      ],
    },
    {
      category: "SIZZIERS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "GRILLED COTTAGE CHEESE SIZZLER CHIPOTLE/PERI PERI/BBQ",
          description:
            "SERVED WITH A MÉLANGE OF VEGGIES WITH MEXICAN RICE & CORN COB",
          price: "645",
          veg: "green",
        },
        {
          name: "ROASTED MEXICAN VEGETABLE SIZZLER",
          description:
            "MEDLEY OF VEGGIES TOSSED IN CHIPOTLE SAUCE WITH MEXICAN RICE AND POTATO WEDGES",
          price: "645",
          veg: "green",
        },
        {
          name: "GRILLLED CHICKEN SIZZLER BLACK PEPPER / BBQ / PERI PERI",
          description:
            "GRILLED CHICKEN WITH CHOICE OF SAUCE, TOSSED VEGGIES, MEXICAN RICE AND CORN COB",
          price: "695",
          veg: "red",
        },
        {
          name: "TEX-MEX LAMB SIZZLER",
          description:
            "LAMB STEAK GRILLED AND SERVED WITH VEGGIES AND MEXICAN RICE, CORN COB & TOPPED WITH RED WINE DEMI GLAZE",
          price: "795",
          veg: "red",
        },
        {
          name: "GRILLED FISH SIZZLER",
          description:
            "GRILLED FISH WITH TOPPED WITH LEMON BUTTER SAUCE, SAUTEED VEGGIES AND FRENCH FRIES",
          price: "795",
          veg: "red",
        },
        {
          name: "BUTTER GARLIC PRAWN SIZZLER",
          description:
            "TIGER PRAWNS GRILLED WITH SECRET MARINATION ON A BED OF VEGGIES AND MEXICAN RICE",
          price: "895",
          veg: "red",
        },
      ],
    },
    {
      category: "CRAFTED SANDWICHES/BURGERS",
      description: "SERVED WITH FRENCH FRIES AND HOUSE SALAD",
      image: "/menu10.svg",
      items: [
        {
          name: "CLUB SANDWICH VEG/NON-VEG",
          description: "An all time favorite",
          price: "395/495",
          veg: "black",
        },
        {
          name: "TUSCAN VEGETABLE MELT FOCACCIA",
          description:
            "Roasted veggies tossed in balsamic glaze with lettuce and cheese",
          price: "445",
          veg: "green",
        },
        {
          name: "GARDEN VEGGIE BURGER",
          description:
            "Homemade veg patty, chipotle mayo and gherkins, tomato, caramelized onion",
          price: "445",
          veg: "green",
        },
        {
          name: "PERI PERI COTTAGE CHEESE BURGER",
          description:
            "Peri peri grilled chicken with lettuce, tomato, caramelized onion, gherkins",
          price: "445",
          veg: "green",
        },
        {
          name: "TEXAS PERI PERI CHICKEN FOCACCIA",
          description:
            "Peri peri grilled chicken with lettuce, tomato, caramelized onion, gherkins",
          price: "595",
          veg: "red",
        },
        {
          name: "NEWYORK STYLE SMOKE CHICKEN BURGER",
          description:
            "Grilled chicken patty, lettuce, gherkins, tomato, corn chips",
          price: "595",
          veg: "red",
        },
        {
          name: "CALIFORNIA LAMB BURGER",
          description:
            "Grilled lamb with a perfect blend of spices and grilled to create a deliciously juicy and flavorful burger",
          price: "695",
          veg: "red",
        },
      ],
    },
    {
      category: "ARTISANS PIZZAS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "ROCKET MARGHERITA CAPRESE",
          description:
            "Margherita with a zing of cherry tomato and rocket leaf",
          price: "495",
          veg: "green",
        },
        {
          name: "ROASTED VEGGIES",
          description:
            "Medley of roasted asparagus, broccoli, bell peppers, zucchini, and caramelized onions",
          price: "595",
          veg: "green",
        },
        {
          name: "VEGETABLE CARNIVAL",
          description:
            "A must try pizza with bell peppers, mushroom, onion, sweet corn, jalapeno, black olive, cherry tomato & rocket leaf",
          price: "595",
          veg: "green",
        },
        {
          name: "QUATTRO FORMAGGIO",
          description:
            "Mozzarella, cheddar, parmesan, feta with sundried tomato, black olive & jalapeno",
          price: "645",
          veg: "green",
        },
        {
          name: "CLASSIC PEPPERONI",
          description: "Chef's favorite with German pork pepperoni, mozzarella",
          price: "695",
          veg: "red",
        },
        {
          name: "ALL THE MEATS",
          description:
            "Smoked diced chicken, chicken sausage, chicken salami, bacon diced, caramelized onion",
          price: "695",
          veg: "red",
        },
        {
          name: "SPICY CHICKEN TIKKA",
          description: "Tandoori diced chicken with onion & green chilly",
          price: "695",
          veg: "red",
        },
        {
          name: "TEX-MEX PERI PERI CHICKEN",
          description:
            "Grilled diced chicken tossed in peri peri sauce with fresh mozzarella, onion & bell peppers",
          price: "695",
          veg: "red",
        },
      ],
    },
    {
      category: "FLAVORSOME PASTA",
      description: "SERVED WITH TOASTED FOCACCIA",
      image: "/menu10.svg",
      items: [
        {
          name: "CHEESE SAUCE",
          description:
            "A heavenly convergence of cream, butter, red wine & cheese create a delicious pasta",
          price: "495/595",
          veg: "black",
        },
        {
          name: "ARABIATTA",
          description: "Tangy tomato pasta with veggies or chicken",
          price: "495/595",
          veg: "black",
        },
        {
          name: "ALFREDO",
          description: "Creamy pasta with veggies or chicken",
          price: "495",
          veg: "green",
        },
        {
          name: "SPAGHETTI AGLIO E OLIO",
          description: "",
          price: "495/595",
          veg: "green",
        },
        {
          name: "VEG LASAGNA",
          description: "",
          price: "495",
          veg: "green",
        },
        {
          name: "SPAGHETTI WITH MEATBALLS",
          description: "",
          price: "695",
          veg: "red",
        },
        {
          name: "CHICKEN LASAGNA",
          description: "",
          price: "625",
          veg: "red",
        },
      ],
    },
    {
      category: "meal bowl",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "KHOW SUEY VEG/CHICKEN",
          description: "",
          price: "",
          veg: "black",
        },
        {
          name: "THAI RED/GREEN CURRY BOWL VEG/CHICKEN/PRAWN",
          description: "Choice of curry with steamed rice and kimchi salad",
          price: "495/595/695",
          veg: "black",
        },
        {
          name: "MANCHURIAN BOWL VEG/CHICKEN",
          description: "Hot garlic sauce with fried rice/noodles",
          price: "495/595",
          veg: "black",
        },
        {
          name: "STIR FRIED MIX VEG BOWL CHILLY GARLIC/BLACK BEAN/SCHEZWAN",
          description:
            "Mixed Asian greens tossed with choice of sauce & rice/noodles",
          price: "495",
          veg: "green",
        },
        {
          name: "CHILLY PANEER BOWL",
          description: "Chilly paneer gravy with fried rice/noodles",
          price: "495",
          veg: "green",
        },
        {
          name: "CHICKEN MONGOLIAN",
          description:
            "Crispy chicken smothered in a sweet ginger hoisin sauce along with rice/noodles",
          price: "595",
          veg: "red",
        },
        {
          name: "FISH IN BLACK BEAN/XO SAUCE",
          description: "Crispy sea bass in choice of sauce & rice/noodles",
          price: "695",
          veg: "red",
        },
        {
          name: "PRAWN IN BLACK BEAN/XO SAUCE",
          description: "Prawns glazed in choice of sauce & rice/noodles",
          price: "795",
          veg: "red",
        },
        {
          name: "CHILLY CHICKEN BOWL",
          description: "Chilly chicken gravy with fried rice/noodles",
          price: "595",
          veg: "red",
        },
        {
          name: "Add ons",
          description: "",
          price: "",
          veg: "",
        },
        {
          name: "GRILLED VEGETABLES",
          description: "",
          price: "145",
          veg: "green",
        },
        {
          name: "MASH POTATO",
          description: "",
          price: "145",
          veg: "green",
        },
        {
          name: "RAITA BOONDI / MIX VEG / PINEAPPLE",
          description: "",
          price: "195/245",
          veg: "green",
        },
        {
          name: "BACON SLICE",
          description: "",
          price: "195",
          veg: "red",
        },
        {
          name: "GRILLED CHICKEN",
          description: "",
          price: "195",
          veg: "red",
        },
        {
          name: "CHICKEN SAUSAGE",
          description: "",
          price: "195",
          veg: "red",
        },
        {
          name: "CHICKEN HAM",
          description: "",
          price: "195",
          veg: "red",
        },
      ],
    },
    {
      category: "MEAL BOWL",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "STEAMED RICE",
          description: "",
          price: "295",
          veg: "green",
        },
        {
          name: "PULAO JEERA/PEAS",
          description: "",
          price: "295/395",
          veg: "green",
        },
        {
          name: "FRIED RICE VEG/CHICKEN",
          description: "",
          price: "295/395",
          veg: "black",
        },
        {
          name: "BURNT GARLIC RICE VEG/CHICKEN",
          description: "",
          price: "375/475",
          veg: "black",
        },
        {
          name: "THAI FRIED RICE VEG/CHICKEN",
          description: "",
          price: "375/475",
          veg: "black",
        },
        {
          name: "HAKKA NOODLES VEG/CHICKEN",
          description: "",
          price: "375/475",
          veg: "black",
        },
        {
          name: "ASIAN NOODLES VEG/CHICKEN",
          description: "",
          price: "375/475",
          veg: "black",
        },
        {
          name: "PAN FRIED NOODLES VEG/CHICKEN",
          description: "",
          price: "375/475",
          veg: "black",
        },
      ],
    },
    {
      category: "SOULFUL INDIAN DELIGHTS",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "Subz handi biryani",
          description:
            "DUM PUKHT VEG BIRYANI WITH A FLAVOR OF WHOLE SPICES, SAFFRON & KEWRA WITH RAITA & KACHUMBER SALAD",
          price: "595",
          veg: "green",
        },
        {
          name: "Double dal tadka",
          description: "YELLOW LENTIL TEMPERED WITH WHOLE SPICES",
          price: "495",
          veg: "green",
        },
        {
          name: "DAL MAKHNI",
          description:
            "North Indian delicacy made with black lentils and kidney beans, cooked in a rich creamy gravy",
          price: "595",
          veg: "green",
        },
        {
          name: "KHUMB MAKAI MASALA",
          description:
            "Delicious combination of corn and mushrooms in a masala gravy",
          price: "545",
          veg: "green",
        },
        {
          name: "SUBZ HANDI BIRYANI",
          description:
            "Dum pukht veg biryani with a flavor of whole spices, saffron & kewra, served with raita & kachumber salad",
          price: "495",
          veg: "green",
        },
        {
          name: "DOUBLE DAL TADKA",
          description: "Yellow lentil tempered with whole spices",
          price: "495",
          veg: "green",
        },
        {
          name: "AMRITSARI CHOLE",
          description:
            "Delhi's favorite local recipe with freshly grounded chole masala",
          price: "495",
          veg: "green",
        },
        {
          name: "DUM ALOO KASHMIRI",
          description:
            "Scoop of potato stuffed with cottage cheese and dry fruits, cooked with rich tomato-onion gravy",
          price: "545",
          veg: "green",
        },
        {
          name: "PANEER BUTTER MASALA/LABABDAR/KADHAI",
          description:
            "Cubes of paneer in choice of butter masala, lababdar, or kadai gravy",
          price: "545",
          veg: "green",
        },
        {
          name: "MAKHMALI PANEER KE KOFTE",
          description: "Indulge in Nawabi savory delights with paneer kofte",
          price: "545",
          veg: "green",
        },
        {
          name: "SUBZ KHADA MASALA",
          description:
            "Assorted seasonal vegetables with whole Indian spices, finished with tomato-onion gravy",
          price: "545",
          veg: "green",
        },
        {
          name: "MURGH HANDI BIRYANI",
          description:
            "Dum pukht chicken biryani with a flavor of whole spices, saffron & kewra, served with raita & kachumber salad",
          price: "695",
          veg: "red",
        },
        {
          name: "GOSHT BIRYANI",
          description:
            "Dum pukht mutton biryani with a flavor of whole spices, saffron & kewra, served with raita & kachumber salad",
          price: "795",
          veg: "red",
        },
        {
          name: "CHICKEN DAHIWALA",
          description:
            "Tangy, peppery, and full of flavors with chicken in yogurt-based gravy",
          price: "595",
          veg: "red",
        },
        {
          name: "DAFTER HOURS SPL CHICKEN CHANGEZI",
          description:
            "Highly popular dish from the streets of Old Delhi, dating back to the era of Changez Khan",
          price: "595",
          veg: "red",
        },
        {
          name: "MURGH MAKHNI WITH BONE/BONELESS",
          description:
            "Tandoori chicken done in rich creamy tomato gravy, available with or without bone",
          price: "595",
          veg: "red",
        },
        {
          name: "KADHAI CHICKEN",
          description:
            "Tandoori chicken prepared in onion, bell pepper, and tomato masala",
          price: "595",
          veg: "red",
        },
        {
          name: "MURGH TIKKA MASALA",
          description: "Chicken tikka prepared in rich onion-tomato gravy",
          price: "595",
          veg: "red",
        },
        {
          name: "KADHAI JHEENGA MASALA",
          description: "Shrimps cooked in rich onion-tomato masala",
          price: "795",
          veg: "red",
        },
        {
          name: "JOSH-E-ROGAN",
          description:
            "Kashmiri delicacy made with tender lamb cooked in aromatic spices",
          price: "695",
          veg: "red",
        },
        {
          name: "RAHRA GOSHT",
          description:
            "Minced lamb cooked with whole pieces of lamb in Indian spices gravy",
          price: "695",
          veg: "red",
        },
      ],
    },
    {
      category: "breads",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "PLAIN NAAN / BUTTER NAAN / GARLIC NAAN",
          description:
            "Soft tandoori breads, available in plain, butter, or garlic variations",
          price: "95/115/125",
          veg: "black",
        },
        {
          name: "PUDINA PARATHA/LACHHA PARATHA",
          description:
            "Flatbreads, available in mint-flavored Pudina Paratha or layered Lachha Paratha",
          price: "95",
          veg: "black",
        },
        {
          name: "MISSI ROTI",
          description: "Indian flatbread made with chickpea flour",
          price: "95",
          veg: "black",
        },
        {
          name: "TANDOORI ROTI PLAIN/BUTTER",
          description:
            "Classic tandoori baked flatbread, available in plain or buttered versions",
          price: "45/75",
          veg: "black",
        },
        {
          name: "AMRITSARI KULCHA ALOO/ONION/PANEER",
          description:
            "Stuffed bread, available with spiced potatoes, onions, or paneer",
          price: "145/195",
          veg: "black",
        },
        {
          name: "CHEESE JALAPENO NAAN",
          description: "Naan stuffed with cheese and jalapenos",
          price: "125",
          veg: "black",
        },
        {
          name: "CHUR-CHUR NAAN/PARATHA",
          description: "Crispy, flaky naan or paratha with a crunchy texture",
          price: "125",
          veg: "black",
        },
        {
          name: "KEEMA PARATHA",
          description: "Stuffed paratha with spiced minced meat",
          price: "145",
          veg: "red",
        },
      ],
    },
    {
      category: "DESSERT",
      description: "",
      image: "/menu10.svg",
      items: [
        {
          name: "ANDAZ E BAYAAN",
          description: "A LIP-SMACKING DESSERT IN LUCKNOWEE ANDAZ",
          price: "195",
          veg: "black",
        },
        {
          name: "BLUEBERRY CHEESECAKE",
          description: "",
          price: "295",
          veg: "black",
        },
        {
          name: "RED VELVET BROWNIE WITH ICE CREAM",
          description: "",
          price: "395",
          veg: "black",
        },
        {
          name: "MEXICAN CHURROS",
          description: "",
          price: "395",
          veg: "black",
        },
        {
          name: "FRUITY NUTTY SUNDAE",
          description: "",
          price: "345",
          veg: "black",
        },
        {
          name: "APPLE PIE WITH ICE CREAM",
          description: "",
          price: "395",
          veg: "black",
        },
        {
          name: "TIRAMISU JAR",
          description: "",
          price: "345",
          veg: "black",
        },
        {
          name: "MOCHA MUD CAKE",
          description: "",
          price: "345",
          veg: "black",
        },
        {
          name: "CHOCOLATE FUDGE CAKE",
          description: "",
          price: "495",
          veg: "black",
        },
        {
          name: "CARAMEL TOFFEE PUDDING",
          description: "",
          price: "495",
          veg: "black",
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
