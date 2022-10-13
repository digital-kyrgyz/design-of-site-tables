        const allAgendaTable = document.getElementById("all-agenda-table");
        const activeAgendaTable = document.getElementById("active-agenda-table");
        const archiveAgendaTable = document.getElementById("archive-agenda-table");

        const allAgendaBtn = document.getElementById("all-agenda-btn");
        const activeAgendaBtn = document.getElementById("active-agenda-btn");
        const archiveAgendaBtn = document.getElementById("archive-agenda-btn");
        function hideShow(nameOfTable) {
            if (nameOfTable === 'all') {
                //Button Agenda
                allAgendaBtn.classList.remove('primary-btn', 'btn-default');
                activeAgendaBtn.classList.remove('primary-btn', 'btn-default');
                archiveAgendaBtn.classList.remove('primary-btn', 'btn-default');

                allAgendaBtn.classList.add("primary-btn");

                activeAgendaBtn.classList.add('btn-default');
                archiveAgendaBtn.classList.add('btn-default');
                //Table Agenda
                allAgendaTable.classList.remove('d-block', 'd-none');
                activeAgendaTable.classList.remove('d-block', 'd-none');
                archiveAgendaTable.classList.remove('d-block', 'd-none');

                allAgendaTable.classList.add('d-block');

                activeAgendaTable.classList.add('d-none');
                archiveAgendaTable.classList.add('d-none');

                $("#tab").val("all");
            }
            else if (nameOfTable === 'active') {
                //Button Agenda
                allAgendaBtn.classList.remove('primary-btn', 'btn-default');
                activeAgendaBtn.classList.remove('primary-btn', 'btn-default');
                archiveAgendaBtn.classList.remove('primary-btn', 'btn-default');

                activeAgendaBtn.classList.add("primary-btn");

                allAgendaTable.classList.add('btn-default');
                archiveAgendaBtn.classList.add('btn-default');
                //Table Agenda
                allAgendaTable.classList.remove('d-block', 'd-none');
                activeAgendaTable.classList.remove('d-block', 'd-none');
                archiveAgendaTable.classList.remove('d-block', 'd-none');

                activeAgendaTable.classList.add('d-block');

                allAgendaTable.classList.add('d-none');
                archiveAgendaTable.classList.add('d-none');
                $("#tab").val("active");
            }
            else if (nameOfTable === 'archive') {
                //Button Agenda
                allAgendaBtn.classList.remove('primary-btn', 'btn-default');
                activeAgendaBtn.classList.remove('primary-btn', 'btn-default');
                archiveAgendaBtn.classList.remove('primary-btn', 'btn-default');

                archiveAgendaBtn.classList.add("primary-btn");

                allAgendaTable.classList.add('btn-default');
                activeAgendaBtn.classList.add('btn-default');

                //Table Agenda
                allAgendaTable.classList.remove('d-block', 'd-none');
                activeAgendaTable.classList.remove('d-block', 'd-none');
                archiveAgendaTable.classList.remove('d-block', 'd-none');

                archiveAgendaTable.classList.add('d-block');

                allAgendaTable.classList.add('d-none');
                activeAgendaTable.classList.add('d-none');
                $("#tab").val("archive");
            }
        }