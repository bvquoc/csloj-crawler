Đoàn trường THPT Chuyên Sơn La tổ chức giải đấu cờ vua. Sau vòng đấu loại, BTC chọn ra được ~N~ bạn vào vòng chung kết, đánh số từ ~1~ đến ~N~. Hình thức thi đấu ở vòng chung kết như sau: BTC cho ~N~ bạn xếp thành một vòng tròn theo thứ tự ~1..N~ (bạn thứ ~N~ đứng cạnh bạn thứ ~1~). Sau đó BTC sẽ chọn ngẫu nhiên ~2~ bạn đứng cạnh nhau để đánh một ván loại trực tiếp, bạn thua sẽ bị loại ra khỏi vòng tròn. Bạn nào còn lại cuối cùng sẽ là bạn vô địch. Do đã nắm được lực cờ của từng bạn nên BTC đã biết được nếu bạn ~i~ đấu với bạn ~j~ thì ai sẽ là người chiến thắng. Cho biết ma trận ~A[1..N, 1..N]~ với ý nghĩa:
- ~A[i, j] = 1~ nếu ~i~ thắng ~j~, ngược lại ~A[i, j] = 0~ nếu ~j~ thắng ~i~
- ~A[i, i] = 1~ với mọi ~i~
- ~A[i, j] + A[j, i] = 1~ với mọi ~i \ne j~

BTC rất muốn biết những bạn nào có khả năng vô địch giải đấu, bạn hãy giúp BTC trả lời câu hỏi này nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~N~;
- ~N~ dòng tiếp theo là ma trận ~A~. Dòng thứ ~i~ chứa ~N~ số nguyên ~A[i, 1], A[i, 2], …, A[i, N]~, hai số liên tiếp ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Dòng đầu ghi số nguyên dương là số bạn có khả năng vô địch.
- Dòng thứ hai ghi chỉ số của những bạn có khả năng vô địch theo thứ tự tăng dần, hai số liên tiếp cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
3
1 1 0
0 1 1
1 0 1
```

#### Dữ liệu ra:
```
3
1 2 3
```

#### Dữ liệu vào:
```
7
1 1 1 1 1 0 1
0 1 0 1 1 0 0
0 1 1 1 1 1 1
0 0 0 1 1 0 1
0 0 0 0 1 0 1
1 1 0 1 1 1 1
0 1 0 0 0 0 1
```

#### Dữ liệu ra:
```
3
1 3 6
```
#### Giải thích:
- Trong test ~\#1~: Tương quan thắng thua của ~3~ bạn như hình sau (Mũi tên chỉ vào ai là người đó thắng)
 <center><img src="/images/problems/450/DPFIGHT.svg" width=300px></center>

- Nếu ta chọn ~2~ đấu với ~3 → 2~ thắng, tiếp theo là ~1~ đấu với ~2 → 1~ thắng ~⇒ 1~ vô địch
- Nếu ta chọn ~1~ đấu với ~3 → 3~ thắng, tiếp theo là ~3~ đấu với ~2 → 2~ thắng ~⇒ 2~ vô địch
- Nếu ta chọn ~1~ đấu với ~2 → 1~ thắng, tiếp theo là ~1~ đấu với ~3 → 3~ thắng ~⇒ 3~ vô địch

## Giới hạn:
- ~1 ≤ N ≤ 500~.