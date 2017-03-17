module.exports = {
    aor: {
        action: {
            delete: 'Törlés',
            show: 'Megtekint',
            list: 'Lista',
            save: 'Mentés',
            create: 'Új',
            edit: 'Szerkeszt',
            cancel: 'Mégsem',
            refresh: 'Frissít',
            add_filter: 'Szűrő hozzáadása',
            remove_filter: 'Szűrő törlése',
        },
        boolean: {
            true: 'Igen',
            false: 'Nem',
        },
        page: {
            list: '%{name} lista',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '%{name} létrehozása',
            delete: '%{name} #%{id} törlése',
            dashboard: 'Irányítópult',
        },
        input: {
            image: {
                upload_several: 'Húzzunk ide néhány fájlt a feltöltéshez, vagy kattintsunk a fájlok kiválasztásához.',
                upload_single: 'Húzzunk ide egy fájlt a feltöltéshez, vagy kattintsunk a fájl kiválasztáshoz.',
            },
        },
        message: {
            yes: 'Igen',
            no: 'Nem',
            are_you_sure: 'Biztos benne?',
            about: 'Névjegy',
        },
        navigation: {
            page_out_of_boundaries: 'A megadott oldalszám (%{page}) nem elérhető',
            page_out_from_end: 'Az utolsó oldalnál tovább nem lehet lapozni',
            page_out_from_begin: 'Az első olalnál előrrébb nem lehet lapozni',
            page_range_info: '%{offsetBegin}-%{offsetEnd} közöttiek listázva a(z) %{total} darabból.',
            next: 'Következő',
            prev: 'Előző',
        },
        auth: {
            username: 'Felhasználónév',
            password: 'Jelszó',
            sign_in: 'Bejelentkezés',
            sign_in_error: 'Sikertelen bejelentkezés. Kérem, próbálja újra.',
            logout: 'Kijelentkezés',
        },
        notification: {
            updated: 'A bejegyzés módosítva',
            created: 'A bejegyzés létrehozva',
            deleted: 'A bejegyzés törölve',
            item_doesnt_exist: 'A bejegyzés nem létezik',
            http_error: 'Hiba történ a kommunikáció során',
        },
        validation: {
            required: 'Kitöltendő',
        },
    },
};
