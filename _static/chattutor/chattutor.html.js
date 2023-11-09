export let chattutor_embed = `
<div class="embed">
	<div>
        <link rel="stylesheet" href="/chattutor/style/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
		<meta name="viewport" content="initial-scale=1, width=device-width">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
	</div>

    <div>

		<section class="msger">
            <div class="msg-header-helper">
                <header class="msger-header">

                  <div class="msger-header-title">
                    <i class="fas fa-comment-alt"></i> <span>ChatTutor</span>
                      <a href="display_db.html" style="color: var(--left-msg-txt)">See db</a>
                      <span id="addUrl">Add URL</span>
                  </div>
                  <div class="msger-header-options">
                    <span><i class="fas fa-cog"></i></span>
                  </div>


                    <div class="button-div" id="themeBtnDiv">
                        <button class="theme-button" id="themeBtn">Toggle theme</button>
                        <button class="theme-button"id="open-menu">
                            <span class="material-symbols-outlined" style="font-size: 15px !important; padding: 0 !important; margin: 0 !important; vertical-align: middle">
                                menu
                              </span>
                        </button>

                    </div>

                </header>
            </div>

            <main class="msger-chat">

                <div class="msg left-msg" style="margin-top: 50px !important;">
                    <div class="msg-bgd">
                        <div
                        class="msg-img"
                        id="msgImg"
                        style="background-image: url(https://static.thenounproject.com/png/2216285-200.png)"
                        ></div>

                        <div class="msg-bubble">
                            <div class="msg-info">
                                <div class="msg-info-name">ChatTutor</div>
                            </div>

                            <div class="msg-text">
                                Welcome to ChatTutor, feel free to ask any questions about this lesson.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear-btn-container" id="clearContId">
                    <!-- Name must be change but DO NOT DELETE ( the messages get added before this container ) -->
                </div>
                <div style="background-color: black;" id="scrollHelper">
                    <!-- Helper for keeping scrolling  -->
                </div>
                <div class="loading-message" style="display: none;">
                    <img src="https://media.tenor.com/_62bXB8gnzoAAAAi/loading.gif" width="20" height="20"/>
                </div>
            </main>
            <form class="msger-inputarea">
              <input type="text" class="msger-input" placeholder="Enter your message..." id="msgInput">
              <div contenteditable="true" id="msgInputDiv" class="msger-input-div"> </div>
                <button type="submit" class="msger-send-btn" id="sendBtn">

                  <span class="material-symbols-outlined" style="font-size: 15px !important; padding: 0 !important; margin: 0 !important; vertical-align: middle">
                    send
                  </span>
              </button>
                <button class="clear-btn" id="clearBtnId">
                    <span class="material-symbols-outlined" style="font-size: 15px !important; padding: 0 !important; margin: 0 !important; vertical-align: middle">
                        delete_forever
                    </span>
                </button>

                <button class="stop-gen-btn" id="stopBtnId">
                    <span class="material-symbols-outlined" style="font-size: 15px !important; padding: 0 !important; margin: 0 !important; vertical-align: middle">
                        stop_circle
                    </span>
                </button>
            </form>
          </section>

          <div id="body-overlay"></div>
          <nav class="real-menu" role="navigation">
                <section>
                    <div class="conainer col">
                        <h1>Settings</h1>
                        <a href="/">Main page</a>

                    </div>
                </section>
                <section>
                    <div class="container col">
                        <p>
                            Use the form below to upload files you want the model to learn
                            from. Upload multiple files as zip archives or pdfs/txts, or simply drag and drop them
                            all at once.
                        </p>
                        <p>
                            Each tuple of files you upload will be saved temporarily as a collection
                            and removed from our database when you reload your page.
                        </p>
                        <p>
                            If you upload multiple collections, you can use the select below
                            to select the selection you want the model to learn from for it to
                            be able to respond to you.
                        </p>
                    </div>
                </section>
                <section>    
                    <div class="container overlay col ">
                      <h1>Upload Files</h1>
                      <div class="pswd-inputarea col">
                          <form id="uploadFileForm" class="no-enter" enctype="multipart/form-data">
                                <div class="input-group">
                                    <label for="files">Select file/files</label>
                                    <!-- <input type="file" style="width: 100% !important; margin-bottom: 20px" id="Zip File" name="file" class="msger-input"> -->
                                    <div class="area">
                                        <span>Upload File</span>
                                        <input type="file" class="multiple-upload" id="upload" name="file" multiple/>
                                    </div>
                                    <label for="name">Set a name</label>
                                    <input type="text" style="width: 100% !important" id="name" name="name" class="pswd-input">
                                </div>
                          </form>
                          <div class="row">
                            <button class="send nice-btn theme-button" id="sendformupload">
                              <span class="nice-btn material-symbols-outlined" style="font-size: 15px !important; padding: 0 !important; margin: 0 !important; vertical-align: middle">
                                  upload
                              </span>
                            </button>

                            <button class="send nice-btn theme-button" id="clearformupload">
                              <span class="nice-btn material-symbols-outlined" style="font-size: 15px !important; padding: 0 !important; margin: 0 !important; vertical-align: middle">
                                  close
                              </span>
                            </button>

                          </div>
                      </div>

                </section>        
                <section>
                    <div class="container col">
                        <h3>Select collection</h3>
                        <select id="selectUploadedCollection">
                        </select>
                    </div>
                </section>

                <section>
                    <div class="container col">
                        <h3>Select Model</h3>
                        <select id="modelDropdown">
                            <option value="gpt-3.5-turbo">GPT-3.5 (4k)</option>
                            <option value="gpt-3.5-turbo-16k">GPT-3.5 (16k)</option>
                            <option selected value="gpt-4">GPT-4 (8k)</option>
                            <option value="gpt-4-32k">GPT-4 (32k)</option>
                        </select>
                    </div>
                </section>

              </div>

              <div class="container" id = "uploadedFilesInfo">

              </div>
          </nav>

    
          <div id="nice-alert">
            <div class="type"></div>
            <span></span>
            <button class="nice-btn theme-button close">
              <span class="nice-btn material-symbols-outlined" style="font-size: 15px !important; padding: 0 !important; margin: 0 !important; vertical-align: middle">
                  close
              </span>
            </button>
          </div>

    </div>

</div>
`