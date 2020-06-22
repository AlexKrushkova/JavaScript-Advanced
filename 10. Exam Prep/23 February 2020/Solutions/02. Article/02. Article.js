class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
 
    get likes () {
        if(this._likes.length == 0) 
        return `${this.title} has 0 likes`;

        else if(this._likes.length == 1) 
        return `${this._likes[0]} likes this article!`;

        else return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }
 
    like(username) {

        if(this._likes.includes(username))
        throw new Error("You can't like the same article twice!");

        if(username == this.creator)
            throw new Error("You can't like your own articles!");

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
 
    dislike(username) {
        if(!this._likes.includes(username))
        throw new Error ("You can't dislike this article!");
        
        this._likes = [...this._likes].filter(e => e != username);
        return `${username} disliked ${this.title}`;
    }
 
    comment (username, content, id) {
        if(!id || !this._comments.find(e => e['id'] == id)) {
            let comment = {id: this._comments.length + 1,
            username, content, replies: []};
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }
        else {
            let comment = this._comments.find(e => e['id'] == id);
            let replyId = id + '.' + (([...comment['replies']].length + 1)).toFixed(0);
            let reply = {id: replyId, username, content};
            comment['replies'].push(reply); // TODO
            return `You replied successfully`;
        }
    }
 
    toString(sortingType) {
        let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
        output += this._comments.sort((a,b) => {
            if(sortingType == 'asc') return a['id'] - b['id'];
            else if(sortingType == 'desc') return b['id'] - a['id'];
            else return a['username'].localeCompare(b['username']);
        }).map(e => {
            let str = `-- ${e['id']}. ${e['username']}: ${e['content']}`;
            if(e['replies'].length > 0) str+='\n';
            str += [...e['replies']].sort((a,b) => {
                if(sortingType == 'asc') return a['id'] - b['id'];
                else if(sortingType == 'desc') return b['id'] - a['id'];
                else return a['username'].localeCompare(b['username']);
            }).map(e1 => `--- ${e1['id']}. ${e1['username']}: ${e1['content']}`).join('\n');
            return str;
        }).join('\n');
        return output.trim();
    }
}