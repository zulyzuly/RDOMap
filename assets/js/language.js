/**
 * Created by Jean on 2019-10-09.
 */

var Language = {};

Language.load = function(isChanged)
{
    languageData =
    {"en-us":{"map.plant.count": "<b>{count}</b> {plant} in this area","menu.ambush": "Ambush","menu.animal.alligator": "Alligator","menu.animal.armadillo": "Armadillo","menu.animal.badger": "Badger","menu.animal.bat": "Bat","menu.animal.bear": "Bear","menu.animal.cougar": "Cougar","menu.animal.loon": "Loon","menu.animal.muskrat": "Muskrat","menu.animal.panther": "Panther","menu.animal.wolf": "Wolf","menu.animals": "Animals","menu.boats": "Boats","menu.campfires": "Campfires","menu.defend_campsite": "Defend Campsites","menu.escort": "Escort","menu.fast_travel": "Fast Travel","menu.hide_all": "Hide all","menu.hideouts": "Gang Hideouts","menu.issues": "Issues","menu.language": "Language","menu.markers": "Markers","menu.no": "No","menu.plant.alaskan_ginseng": "Alaskan Ginseng","menu.plant.american_ginseng": "American Ginseng","menu.plant.bay_bolete": "Bay Bolete","menu.plant.blackberry": "Blackberry","menu.plant.black_currant": "Black Currant","menu.plant.burdock_root": "Burdock Root","menu.plant.chanterelle": "Chanterelle","menu.plant.common_bullbrush": "Common Bullbrush","menu.plant.creeping_thyme": "Creeping Thyme","menu.plant.desert_sage": "Desert Sage","menu.plant.english_mace": "English Mace","menu.plant.evergreen_huckleberry": "Evergreen Buckleberry","menu.plant.golden_currant": "Golden Currant","menu.plant.hummingbird_sage": "Hummingbird Sage","menu.plant.indian_tobacco": "Indian Tobacco","menu.plant.milkweed": "Milkweed","menu.plant.oleander_sage": "Oleander Sage","menu.plant.oregano": "Oregano","menu.plant.parasol_mushroom": "Parasol Mushroom","menu.plant.prairie_poppy": "Prairie Poppy","menu.plant.rams_head": "Rams Head","menu.plant.raspberry": "Red Raspberry","menu.plant.red_sage": "Red Sage","menu.plant.vanilla_flower": "Vanilla Flower","menu.plant.violet_snowdrop": "Violet Snowdrop","menu.plant.wild_carrot": "Wild Carrot","menu.plant.wild_feverfew": "Wild Feverfew","menu.plant.wild_mint": "Wild Mint","menu.plant.wintergreen_berry": "Wintergreen Berry","menu.plant.yarrow": "Yarrow","menu.plants": "Plants","menu.report_issues": "Report issues here!","menu.rescue": "Rescue","menu.search": "Search","menu.search_placeholder": "Search items. Separated by ;","menu.settings": "Settings","menu.show_all": "Show all","menu.show_coords": "Show coordinates on click","menu.yes": "Yes"},"fr-fr":{"map.plant.count": "<b>{count}</b> {plant} in this area","menu.ambush": "Ambush","menu.animal.alligator": "Alligator","menu.animal.armadillo": "Tattou","menu.animal.badger": "Badger","menu.animal.bat": "Bat","menu.animal.bear": "Ours","menu.animal.cougar": "Couguar","menu.animal.loon": "Plongeon","menu.animal.muskrat": "Muskrat","menu.animal.panther": "Panthère","menu.animal.wolf": "Loup","menu.animals": "Animaux","menu.boats": "Bateaux","menu.campfires": "Feux de Camp","menu.defend_campsite": "Defend Campsites","menu.escort": "Escort","menu.fast_travel": "Voyage Rapide","menu.hide_all": "Tout Cacher","menu.hideouts": "Camps de Bandits","menu.issues": "Problèmes","menu.language": "Langue","menu.markers": "Balises","menu.no": "Non","menu.plant.alaskan_ginseng": "Ginseng d'Alaska","menu.plant.american_ginseng": "Ginseng Américain","menu.plant.bay_bolete": "Bolet Bai","menu.plant.black_berry": "Mûre","menu.plant.black_currant": "Cassis","menu.plant.burdock_root": "Bardane","menu.plant.chanterelle": "Chanterelle","menu.plant.common_bullbrush": "Jonc Commun","menu.plant.creeping_thyme": "Thym Sauvage","menu.plant.desert_sage": "Sauge du Désert","menu.plant.english_mace": "Achillée Visqueuse","menu.plant.evergreen_huckleberry": "Airelle Ovale","menu.plant.golden_currant": "Groseille Odorante","menu.plant.hummingbird_sage": "Sauge du Colibri","menu.plant.indian_tobacco": "Tabac Indien","menu.plant.milkweed": "Asclépiade","menu.plant.oleander_sage": "Laurier-Rose","menu.plant.oregano": "Origan","menu.plant.parasol_mushroom": "Coulemelle","menu.plant.prairie_poppy": "Pavot des Champs","menu.plant.rams_head": "Orchidée Cyrtopdium","menu.plant.raspberry": "Framboise","menu.plant.red_sage": "Sauge Rouge","menu.plant.vanilla_flower": "Fleur de Vanille","menu.plant.violet_snowdrop": "Perce-Neige Violet","menu.plant.wild_carrot": "Carotte Sauvage","menu.plant.wild_feverfew": "Camomille Sauvage","menu.plant.wild_mint": "Menthe Sauvage","menu.plant.wintergreen_berry": "Baie de Gaulthérie Couchée","menu.plant.yarrow": "Millefeuille","menu.plants": "Plantes","menu.report_issues": "Remonter un problème ici!","menu.rescue": "Rescue","menu.search": "Recherche","menu.search_placeholder": "Recherche d'objet. Séparés par des ;","menu.settings": "Paramètres","menu.show_all": "Tout Montrer","menu.show_coords": "Afficher les coordonnées","menu.yes": "Oui"},"pt-br":{"map.plant.count": "<b>{count}</b> {plant} nesse área","menu.ambush": "Emboscada","menu.animal.alligator": "Jacaré","menu.animal.armadillo": "Tatuetê","menu.animal.badger": "Texugo","menu.animal.bat": "Morcego","menu.animal.bear": "Urso","menu.animal.cougar": "Suçuarana","menu.animal.loon": "Mobelha","menu.animal.muskrat": "Rato-Almiscarado","menu.animal.panther": "Pantera","menu.animal.wolf": "Lobo","menu.animals": "Animais","menu.boats": "Barcos","menu.campfires": "Fogueiras","menu.defend_campsite": "Defender Acampamentos","menu.escort": "Escolta","menu.fast_travel": "Viagem Rápida","menu.hide_all": "Esconder tudo","menu.hideouts": "Esconderijos","menu.issues": "Problemas","menu.language": "Idima","menu.markers": "Marcadores","menu.no": "Não","menu.plant.alaskan_ginseng": "Ginseng do Alasca","menu.plant.american_ginseng": "Ginseng Americano","menu.plant.bay_bolete": "Boleto Baio","menu.plant.black_berry": "Framboesa","menu.plant.black_currant": "Cassis","menu.plant.burdock_root": "Bardana","menu.plant.chanterelle": "Cantarelo","menu.plant.common_bullbrush": "Taboa Comum","menu.plant.creeping_thyme": "Tomilho","menu.plant.desert_sage": "Sálvia do Deserto","menu.plant.english_mace": "Agerato","menu.plant.evergreen_huckleberry": "Huckleberry da Califórnia","menu.plant.golden_currant": "Cassis Dourado","menu.plant.hummingbird_sage": "Sálvia Beija-Flor","menu.plant.indian_tobacco": "Tabaco-Indiano","menu.plant.milkweed": "Asclepias","menu.plant.oleander_sage": "Sálvia Oleandro","menu.plant.oregano": "Orégano","menu.plant.parasol_mushroom": "Cogumelo Guarda-Sol","menu.plant.prairie_poppy": "Papoula da Pradaria","menu.plant.rams_head": "Maitake","menu.plant.raspberry": "Framboesa Vermelha","menu.plant.red_sage": "Sálvia Vermelha","menu.plant.vanilla_flower": "Flor-de-Baunilha","menu.plant.violet_snowdrop": "Gotas-de-Leite Violetas","menu.plant.wild_carrot": "Cenoura Selvagem","menu.plant.wild_feverfew": "Quinina Silvestre","menu.plant.wild_mint": "Menta-Silvestre","menu.plant.wintergreen_berry": "Gualtéria","menu.plant.yarrow": "Mil-Folhas","menu.plants": "Plantas","menu.report_issues": "Reporte problemas/sugestões aqui","menu.rescue": "Resgate","menu.search": "Pesquisar","menu.search_placeholder": "Busque itens. Separe-os com ;","menu.settings": "Configurações","menu.show_all": "Mostrar tudo","menu.show_coords": "Mostrar coordenadas","menu.yes": "Sim"},"ru":{"map.plant.count": "{plant} растет тут в кол-ве <b>{count}</b> шт.","menu.ambush": "Засады","menu.animal.alligator": "Аллигатор","menu.animal.armadillo": "Броненосец","menu.animal.badger": "Барсук","menu.animal.bat": "Ночница","menu.animal.bear": "Медведь","menu.animal.cougar": "Пума","menu.animal.loon": "Гагара","menu.animal.muskrat": "Ондатра","menu.animal.panther": "Пантера","menu.animal.wolf": "Волк","menu.animals": "Животные","menu.boats": "Лодки","menu.campfires": "Лагерный костер","menu.defend_campsite": "Оборона лагеря","menu.escort": "Сопровождение","menu.fast_travel": "Быстрое перемещение","menu.hide_all": "Скрыть всё","menu.hideouts": "Логова банд","menu.issues": "Обратная связь","menu.language": "Язык","menu.markers": "Метки","menu.no": "Нет","menu.plant.alaskan_ginseng": "Аляскинский женьшень","menu.plant.american_ginseng": "Американский женьшень","menu.plant.bay_bolete": "Польский гриб","menu.plant.black_berry": "Ежевика","menu.plant.black_currant": "Черная смородина","menu.plant.burdock_root": "Корень лопуха","menu.plant.chanterelle": "Лисички","menu.plant.common_bullbrush": "Камыш обыкновенный","menu.plant.creeping_thyme": "Тимьян ползучий","menu.plant.desert_sage": "Пустынный шалфей","menu.plant.english_mace": "Тысячелистник агератумный","menu.plant.evergreen_huckleberry": "Черника овальнолистая","menu.plant.golden_currant": "Смородина золотистая","menu.plant.hummingbird_sage": "Шалфей покрывальцевый","menu.plant.indian_tobacco": "Индейский табак","menu.plant.milkweed": "Молочай","menu.plant.oleander_sage": "Олеандр","menu.plant.oregano": "Душица","menu.plant.parasol_mushroom": "Гриб-зонтик","menu.plant.prairie_poppy": "Пустынный мак","menu.plant.rams_head": "Гриб-баран","menu.plant.raspberry": "Малина","menu.plant.red_sage": "Красный шалфей","menu.plant.vanilla_flower": "Цветок ванили","menu.plant.violet_snowdrop": "Фиолетовый подснежник","menu.plant.wild_carrot": "Дикая морковь","menu.plant.wild_feverfew": "Дикий пиретрум","menu.plant.wild_mint": "Мята","menu.plant.wintergreen_berry": "Гаультерия","menu.plant.yarrow": "Тысячелистник","menu.plants": "Растения","menu.report_issues": "Связаться с разработчиком","menu.rescue": "Спасение","menu.search": "Поиск","menu.search_placeholder": "Что желаете найти?","menu.settings": "Настройки","menu.show_all": "Показать всё","menu.show_coords": "Показ. координаты","menu.yes": "Да"}}
    ;

    Language.setMenuLanguage();
    if(isChanged) {
        Map.addMarkers();
        Menu.refreshMenu();
    }

};

Language.setMenuLanguage = function ()
{
    $.each($('[data-text]'), function (key, value)
    {
        var temp = $(value);
        if(languageData[lang][temp.data('text')] == null) {
            console.error(`[LANG][${lang}]: Text not found: '${temp.data('text')}'`);
        }

        $(temp).text(languageData[lang][temp.data('text')]);
    });

    ///Special cases:
    $('#search').attr("placeholder", languageData[lang]['menu.search_placeholder']);
};
