<script setup lang="ts"></script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ app.name }}</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Sushi
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link class="dropdown-item" aria-current="page" to="/multisigs">Multi Sigs</router-link></li>
                            <li><router-link class="dropdown-item" aria-current="page" to="/routers">Routers</router-link></li>
                            <li><router-link class="dropdown-item" aria-current="page" to="/factories">Factories</router-link></li>
                            <li><router-link class="dropdown-item" aria-current="page" to="/makers">Makers</router-link></li>
                            <li><router-link class="dropdown-item" aria-current="page" to="/chefs">Chefs</router-link></li>
                            <li><router-link class="dropdown-item" aria-current="page" to="/bentoboxes">BentoBoxes</router-link></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex">
                    {{
                        app.web3.connector?.chainName
                    }}
                    {{
                        app.web3.address
                    }}
                    <template v-if="app.web3.safe">
                        <br />
                        Gnosis: {{ app.web3.safe.safeAddress }}
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>
