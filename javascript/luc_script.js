/*Script sheet for my section of the website*/
/*created by: Luc McNichol*/

/*-----GENERAL FUNCTIONS-----*/
/*function for whenever a page loads*/
window.onload = function(){
    fadeout(); // fades the screen from black
    uk();      // sets language to English
};

/*function that fades the page out from black*/
function fadeout(){
	setTimeout(function(){/*short delay as page was loading and the animation wasnt playing*/
	fade.style.opacity=0;/*sets the fade element to be invisible*/
	},1000);
}
	
/*function that fades the page in to black*/
function fadein(){
	fade.style.opacity=1;/*sets the fade element to be visible again*/
}

/*function for whenever the user redirects a page*/
function redirect(x){
	transition.play();/*plays the transition audio*/
	fadein();/*calls the fade in function*/
	setTimeout(function(){/*delays the redirect to allow the fade audio and animation play*/
		window.location.href=x;/*relocates the page to the location given*/
		window.location.reload();/*reloads the window to ensaure fadeout() happens*/
	},3000);
}	
	
/*function for whenever the jukebox is clicked*/
function play(){
	if(background.paused){/*does the following if the music is paused*/
		background.play();/*plays the music*/
		jukebox.src="../images/homePage/luc_music.png";/*changes the icon to played*/
	}else{/*does the following if the music is played*/
		background.pause();/*pauses the music*/
		jukebox.src="../images/homePage/luc_mute.png";}/*changes the icon to paused*/
}
	
/*-----GAMEPLAY FUNCTIONS-----*/
/*function that calculates a win or loss*/
function winlose(){
	sword.play()/*plays the sword sound, letting the user know a fight has been engaged*/
	const selectedWeapon = localStorage.getItem("chosenWeapon");/*gets the item from local storage*/
	boss.src="../images/homePage/luc_fight.gif";/*plays the boss fight gif*/
	setTimeout(function () {/**/
        if (selectedWeapon === "Sword" || selectedWeapon === "Dagger"){/*if the correct weapon is chosen*/
            redirect('../pages/luc_win_page.html');/*redirect to the win page*/
        }else{/*if the wrong weapon is chosen*/
            redirect('../pages/luc_loss_page.html');/*redirect to the loss page*/
        }
    	}, 3000);/*allows enough time for the gif to play*/
}

/*function that allows a game restart*/
function restart(){
	fadein();/*calls the fade in function*/
	fade.innerText="RESTARTING..."/*lets the user know the game is restarting*/
	fade.style.backgroundImage="url('../images/homePage/luc_loading.gif')";/*plays a loading gif*/
	fade.style.backgroundSize="cover";/*covers the full screen with the gif*/
	background.play()/*plays the loading music*/
	localStorage.setItem("chosenWeapon","");/*sets the weapon back to none*/
	setTimeout(function(){/*delays the redirect to allow the fade audio and animation play*/
		window.location.href="../index.html"/*redirects to the home page*/
	},8000);
}
	
/*-----HELP LANGUAGE FUNCTIONS-----*/
/*function which changes the help page langauge to English*/
function uk(){
ruleshead.innerText="RULES";
helphead.innerText="HELP";
rules.innerHTML="The objective of the story is to defeat Gilgamesh the Goblin. This can only be done through an effective combination of items.<br><br>You may only carry 3 items, and each item will have qualities that will aid you in your final battle.<br><br>Once an item has been picked up, you may not drop the item unless you restart the adventure. Doing so will wipe your inventory.<br><br>You may take any path, forward or backward, to the end of the adventure where you will initiate the boss fight.<br><br>Only one of each item type may be carried at once.<br><br>Good Luck!";
help.innerHTML="Navigate through the website using the options at the bottom of the screen. Simply click the text and you will progress further into the adventure.<br><br>To play music click the top right music icon to play and pause the music provided.<br><br>At any point click the top left help icon to be navigated back to this help page.<br><br>At the end of the adventure, click the restart button to go back to the start. Your items will be removed.<br><br>You should read about the items qualities before picking it up.<br><br>Come back to this page if you need more help!";
}
/*function which changes the help page langauge to Spanish*/
function spanish(){
ruleshead.innerText="REGLAS";
helphead.innerText="AYUDA";
rules.innerHTML="El objetivo de la historia es derrotar a Gilgamesh el Duende. Esto solo se puede lograr mediante una combinación efectiva de objetos.<br><br> Solo puedes llevar 3 objetos y cada objeto tendrá cualidades que te ayudarán en tu batalla final.<br><br> Una vez que un objeto ha sido recogido, no podrás soltarlo a menos que reinicies la aventura. Hacerlo borrará tu inventario.<br><br> Puedes tomar cualquier camino, hacia adelante o hacia atrás, hasta llegar al final de la aventura donde iniciarás la batalla contra el jefe.<br><br> Solo se puede llevar un objeto de cada tipo a la vez.<br> ¡Buena suerte!";
help.innerHTML="Navega por el sitio web usando las opciones en la parte inferior de la pantalla. Simplemente haz clic en el texto y avanzarás más en la aventura.<br><br> Para reproducir música, haz clic en el ícono de música en la parte superior derecha para reproducir y pausar la música proporcionada.<br><br> En cualquier momento, haz clic en el ícono de ayuda en la parte superior izquierda para volver a esta página de ayuda.<br><br> Al final de la aventura, haz clic en el botón de reinicio para regresar al inicio. Se eliminarán tus objetos.<br><br> Deberías leer sobre las cualidades de los objetos antes de recogerlos.<br> ¡Vuelve a esta página si necesitas más ayuda!";
}
/*function which changes the help page langauge to French*/
function french(){
ruleshead.innerText="REGLES";
helphead.innerText="AIDE";
rules.innerHTML="L'objectif de l'histoire est de vaincre Gilgamesh le Gobelin. Cela ne peut être accompli qu'à travers une combinaison efficace d'objets.<br><br>Vous ne pouvez porter que 3 objets et chaque objet aura des qualités qui vous aideront dans votre combat final.<br><br>Une fois qu'un objet a été ramassé, vous ne pouvez pas le déposer à moins de recommencer l'aventure. Cela effacera votre inventaire.<br><br>Vous pouvez emprunter n'importe quel chemin, en avant ou en arrière, jusqu'à la fin de l'aventure où vous engagerez le combat contre le boss.<br><br>Vous ne pouvez transporter qu'un seul objet de chaque type à la fois.<br>Bonne chance !"
help.innerHTML="Naviguez à travers le site en utilisant les options en bas de l'écran. Cliquez simplement sur le texte et vous progresserez dans l'aventure.<br><br>Pour jouer de la musique, cliquez sur l'icône de musique en haut à droite pour lire et mettre en pause la musique fournie.<br><br>À tout moment, cliquez sur l'icône d'aide en haut à gauche pour revenir à cette page d'aide.<br><br>À la fin de l'aventure, cliquez sur le bouton de redémarrage pour revenir au début. Vos objets seront supprimés.<br><br>Vous devez lire les qualités des objets avant de les ramasser.<br>Revenez sur cette page si vous avez besoin de plus d'aide !"
}
/*function which changes the help page langauge to Chinese*/
function chinese(){
ruleshead.innerText="规则";
helphead.innerText="帮助";
rules.innerHTML="故事的目标是击败吉尔伽美什这只地精。只有通过有效的物品组合才能完成这一目标。<br><br>你只能携带3件物品，每件物品都具有能在最终战斗中帮助你的特性。<br><br>一旦拾取了物品，你就不能丢弃它，除非重新开始冒险。这样做会清空你的物品栏。<br><br>你可以选择任何路径，无论是前进还是后退，直到冒险的尽头，在那里你将开始与boss的战斗。<br><br>每种类型的物品只能携带一个。<br><br>祝你好运！"
help.innerHTML="通过使用屏幕底部的选项在网站上导航。只需点击文本，您将进一步进入冒险。<br><br>要播放音乐，请点击右上角的音乐图标播放和暂停提供的音乐。<br><br>在任何时候，点击左上角的帮助图标即可返回此帮助页面。<br><br>在冒险结束时，点击重启按钮返回开始。您的物品将被删除。<br><br>在捡起物品之前，您应该阅读物品的属性。<br><br>如果您需要更多帮助，请返回此页面！"
} 
