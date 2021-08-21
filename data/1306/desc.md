**<center>NGUỒN: Bài tập thầy Vũ Mạnh Hà - Ôn Hải Phòng 07/11/2020</center>**

Một chàng lười ~X~ quyết tâm luyện tập thể thao để gia tăng thể lực. Mỗi lần tập chàng ta dành ra ~𝑁~ phút luyện tập, hình thức tập được chọn là chạy bộ.

Tham số quyết định quá trình tập của X là “độ mệt mỏi”, nó bằng ~0~ vào lúc bắt đầu tập và cần phải được 
đưa về ~0~ vào cuối buổi tập, độ mệt mỏi luôn không âm. X có thể lựa chọn chạy hay nghỉ trong mỗi phút 
của thời gian tập.

- Nếu X lựa chọn chạy trong phút thứ ~𝑖~, anh chàng sẽ chạy được ~𝐿_𝑖~ mét đồng thời độ mệt mỏi sẽ gia tăng ~1~, tuy nhiên X không thể tiếp tục chạy khi độ mệt mỏi đã đạt đến ~𝑀~.
- Nếu 𝑋 lựa chọn nghỉ, mỗi phút nghỉ sẽ làm độ mệt mỏi giảm ~1~ nếu nó lớn hơn ~0~, và một khi đã nghỉ, chàng ta sẽ nghỉ cho đến khi độ mệt mỏi giảm về ~0~, lúc đó X có thể chạy tiếp (độ mệt mỏi gia tăng) hoặc nghỉ tiếp (độ mệt mỏi vẫn bằng ~0~.

X nhờ bạn xác định tổng độ dài quãng đường chạy lớn nhất anh ta có thể chạy được với các giới hạn kể trên.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~𝑁, 𝑀\ (1 ≤ 𝑁 ≤ 10000; 1 ≤ 𝑀 ≤ 500)~;
- ~N~ dòng tiếp theo, dòng thứ ~i~ chứa số nguyên ~L_i\ (1 ≤ 𝐿_𝑖 ≤ 1000 ∀𝑖 = 1 ÷ 𝑁)~.

## Dữ liệu ra:
- Một số nguyên là tổng độ dài quãng đường X chạy được lớn nhất.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
5
3
4
2
10
```

#### Dữ liệu ra:
```
9
```

#### Giải thích:
- X chạy trong phút thứ ~1~, nghỉ trong phút thứ ~2~, chạy trong phút thứ ~3~ rồi nghỉ trong hai phút cuối.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)