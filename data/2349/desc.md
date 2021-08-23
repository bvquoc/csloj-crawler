<!--**<center>NGUỒN: Free Contest FYT Code Cup Day 2</center>**-->

Vào mỗi mùa hè, FYT luôn tổ chức team building để mọi người hiểu rõ nhau hơn.

Team building lần này, FYT có $2n + 2$ thành viên tham gia, các thành viên được đánh số từ $1$ đến $2n + 2$. Lớp trưởng DHK đang có ý tưởng về $2$ trò chơi cho team building lần này, mỗi trò chơi có yêu cầu như sau:
- Trò chơi $1$: Yêu cầu chia $2n + 2$ thành viên thành $2$ nhóm, mỗi nhóm $n + 1$ thành viên. Hai thành viên bất kì trong cùng một nhóm cần phải quen nhau.
- Trò chơi $2$: Yêu cầu chia $2n + 2$ thành viên thành $n + 1$ nhóm, mỗi nhóm $2$ thành viên. Hai thành viên cùng nhóm với nhau phải quen nhau.

Biết rằng mọi người trong FYT đều rất hòa đồng nên trong các thành viên tham gia lần team building này, mỗi thành viên đều quen ít nhất $n$ người khác (quan hệ quen nhau là quan hệ hai chiều, $a$ quen $b$ thì $b$ cũng quen $a$).

Bạn hãy giúp lớp trưởng DHK kiểm tra xem liệu có thể chơi được một trong hai trò chơi không, nếu có thì in ra cách chia nhóm thỏa mãn (nếu có nhiều cách chia thỏa mãn, bạn có thể in ra bất kì cách chia nào).

## Dữ liệu vào:
- Dòng đầu tiên chứa một số nguyên dương $n$;
- Mỗi dòng trong $2n + 2$ dòng tiếp theo gồm $2n + 2$ kí tự, kí tự thứ $j$ của dòng thứ $i$ bằng $1$ khi và chỉ khi thành viên thứ $i$ quen thành viên thứ $j$, và bằng $0$ nếu ngược lại.

## Dữ liệu ra:
- Dòng đầu tiên in ra `NO` nếu không thể chọn một trong hai trò chơi để chơi, `YES` nếu ngược lại;
- Nếu dòng đầu tiên là `YES` thì dòng thứ $2$ in ra $1$ hoặc $2$ lần lượt ứng với việc chơi được trò chơi $1$ hoặc chơi được trò chơi $2$;
- Nếu chơi được trò chơi $1$ thì $2$ dòng tiếp theo, mỗi dòng lần lượt in ra danh sách thành viên của từng nhóm;
- Nếu chơi được trò chơi $2$ thì $n + 1$ dòng tiếp theo, mỗi dòng lần lượt in ra $2$ thành viên của từng nhóm.

Bạn có thể in danh sách nhóm theo bất kì thứ tự nào.

## Ví dụ:
### Dữ liệu vào:
```
1
0111
1011
1101
1110
```

### Dữ liệu ra:
```
YES
1
1 2
3 4
```

### Dữ liệu vào:
```
1
0111
1000
1000
1000
```

### Dữ liệu ra:
```
NO
```

### Giải thích:
<center><img src="/images/problems/2349/GGRAPH1.png" width="350px" /></center>

- Trong ví dụ thứ nhất, với đồ thị như trên ta có thể chơi được trò chơi thứ nhất, với $2$ nhóm là $(1, 2)$ và $(3, 4)$.

<center><img src="/images/problems/2349/GGRAPH2.png" width="350px" /></center>

- Trong ví dụ thứ hai, với đồ thị như trên ta có thể thấy không thể chơi trò chơi nào trong hai trò chơi trong đề bài.

## Giới hạn:
- Trong tất cả các test có $1 ≤ n ≤ 1000$.