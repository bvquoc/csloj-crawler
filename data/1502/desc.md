Giáo sư Y rất hào phóng, ông có $n$ học trò và ông đã chuẩn bị $q$ bữa tiệc mừng cho các học trò của mình. Trong các bữa tiệc ông sử dụng Cocktail để thiết đãi các học trò, ông cũng biết được lượng Cocktail tối thiểu của mỗi học trò mà khi họ uống đủ lượng bằng đấy thì sẽ thấy sảng khoái.

Các học trò của giáo sư đều là những Contestant rất giỏi và luôn có những Solution độc đáo trong các kỳ thi CSLPreVNOI. Trong số các học trò của giáo sư có $m$ cặp là bạn bè (một người có thể là bạn bè với nhiều người). Với mỗi cặp bạn bè, nếu trong bữa tiệc cả hai cùng thấy sảng khoái, họ sẽ trao đổi Solution của mình với nhau. Khi một người A trao đổi Solution của mình với người B, người B có thể đem Solution đó trao đổi với người khác (tất nhiên, theo phép lịch sự, B sẽ không trao đổi ngay Solution đó với A,  nhưng có thể B trao đổi với C rồi C lại trao đổi lại với A), nhưng thật may là các mối quan hệ bạn bè trong các học trò của giáo sư được hình thành theo cách mà Solution của người A sẽ không thể trao đổi lại với người A trong bữa tiệc, bất kể thứ tự xảy ra các trao đổi như thế nào.

Giáo sư đã chuẩn bị những lượng Cocktail nhất định cho các bữa tiệc của mình. Trong mỗi bữa tiệc, giáo sư muốn có nhiều học trò trao đổi Solution, vì vậy ông muốn chia lượng Cocktail cho các học trò của mình sao cho số lượng người trao đổi Solution là nhiều nhất có thể.

Bạn, một học trò xuất sắc của giáo sư, hãy giúp giáo sư tính toán điều đó.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n, m\ (0 ≤ m < n ≤ 1000)$ là số học trò của giáo sư tham gia các bữa tiệc và số cặp là bạn bè.
- Dòng thứ hai chứa $n$ số nguyên dương $d_1, d_2, ..., d_n$, trong đó số $1 ≤ d_i ≤ 10^9$ là lượng Cocktail tối thiểu để người thứ $i$ đạt sảng khoái.
- Dòng thứ $i$ trong số $m$ dòng tiếp theo chứa hai số nguyên dương $A_i, B_i,\ (A_i ≠ B_i, 1\le A_i, B_i \le n)$ cho biết $A_i$ và $B_i$ là bạn bè.
- Dòng tiếp theo chứa một số nguyên dương $q\ (1 ≤ q ≤ 2.10^5)$ là số bữa tiệc mà giáo sư sẽ tổ chức.
- $q$ dòng tiếp theo, dòng thứ $i$ chứa số nguyên $s_i\ (1 ≤ s_i ≤ 10^9)$ là số lượng Cocktail giáo sư chuẩn bị để phục vụ trong bữa tiệc thứ $i$.

## Dữ liệu ra:
- Ghi ra $q$ dòng, dòng thứ $i$ là số lượng lớn nhất người trao đổi Solution với bạn bè trong bữa tiệc thứ $i$. Lưu ý rằng các bữa tiệc là độc lập.

## Giới hạn:
- **Subtask** $\#1$: $25\%$ số test tương ứng với $25\%$ số điểm có $m = n − 1, 1 ≤ s_i ≤ 1000$ và mỗi người có quan hệ bạn bè với không quá hai người khác;
- **Subtask** $\#2$: $25\%$ số test khác tương ứng với $25\%$ số điểm có
$m = n − 1$ và mỗi người có quan hệ bạn bè với không quá hai người khác;
- **Subtask** $\#3$: $25\%$ số test khác tương ứng với $25\%$ số điểm có $n \le 100$;
- **Subtask** $\#4$: $25\%$ số test còn lại tương ứng với $25\%$ số điểm không có ràng buộc gì thêm.

## Ví dụ (Tải test đề bài và 2 test mẫu khác ở "Tệp đính kèm" phía trên đề bài):
#### Dữ liệu vào:
```
14 13
2 3 4 19 20 21 5 22 6 7 23 8 10 14
1 2
1 3
1 4
2 5
2 6
3 7
3 8
3 9
4 10
8 11
10 13
10 12
12 14
3
45
44
23
```

#### Dữ liệu ra:
```
8
7
5
```

#### Giải thích:
<center><img src="/images/problems/1502/PARTY.svg" width=500></center>
<center>Hình minh họa cho bữa tiệc 1 trong test đề bài</center>

Trong bữa tiệc này, những người số $1, 2, 3, 7, 9, 10, 12, 13$ dùng hết $2+3+4+5+6+7+8+10=45$ đơn vị cocktail để đạt độ sảng khoái. Do đó có $8$ người sẽ trao đổi lời giải với bạn bè.