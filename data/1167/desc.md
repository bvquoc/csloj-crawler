**<center>NGUỒN: PVH PreVOI ONLINE 2020 (13 - 14/12/2019)</center>**
<br>

Admin mới nhất của cộng đồng Vinoy  — **MofK** — là người có [rating Codeforces cao nhất Vinoy](https://codeforces.com/profile/MofK). Với IQ ~299/300~ đứng số ~2~ thế giới chỉ sau soái ca VLT, MofK đã phát minh ra một chiếc máy có thể dự báo trước sự thay đổi rating của mình ở các kì thi trong tương lai. Để thử nghiệm phát minh mới của mình, MofK đã cho chiếc máy phân tích ~𝑛~ kì thi sắp tới trên [Codeforces](https://codeforces.com). Chiếc máy trả về độ khó của kì thi thứ ~𝑖~ là một số nguyên không âm ~𝑎_𝑖~. Vì đề bài Codeforces càng ngày càng trí tuệ nên không ngạc nhiên khi dãy ~𝑎~ là một dãy tăng không nghiêm ngặt. Nói cách khác, với mọi ~1 ≤ 𝑖 < 𝑛~, ta có ~𝑎_𝑖 ≤ 𝑎_{𝑖+1}~. Dù sở hữu IQ vô cùng cao nhưng MofK lại không màng đến rating, vì vậy anh càng tỏa sáng khi độ khó của kì thi càng chênh lệch với rating hiện tại của anh. Cụ thể hơn, nếu rating hiện tại của MofK là ~𝑥~ thì sau khi thi kì thi với độ khó ~𝑎_𝑖~, rating mới của MofK sẽ là ~|𝑥 − 𝑎_𝑖|~.  MofK rất hài lòng với phát minh mới của mình. Hiện tại, anh có ~𝑞~ kế hoạch. Trong kế hoạch thứ ~𝑖~, anh dự định sử dụng tài khoản có rating là ~𝑥_𝑖~ (MofK có rất nhiều tài khoản clone vì anh không màng đến rating) để thi tất cả các kì thi từ ~𝑙_𝑖~ tới ~𝑟_𝑖~. Với mỗi kế hoạch, anh muốn biết rating cuối cùng của tài khoản đó sẽ là bao nhiêu. Vì IQ của MofK quá cao nên anh không thể thực hiện phép trừ như người thường, vậy nên các bạn hãy giúp admin Vinoy của chúng ta nhé!

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~𝑇~ ~(1 ≤ 𝑇 ≤ 4)~ là số thứ tự của subtask chứa test này.
- Dòng thứ hai chứa hai số nguyên ~𝑛~ và ~𝑞~ ~(1 ≤ 𝑛, 𝑞 ≤ 3\times 10^5)~ là số kỳ thi sắp tới trên Codeforces và số kế hoạch của MofK.
- Dòng thứ ba chứa ~𝑛~ số nguyên ~𝑎_1, 𝑎_2, … 𝑎_𝑛~ ~(0 ≤ 𝑎_1 ≤ 𝑎_2 ≤ ⋯ ≤ 𝑎_𝑛 ≤ 10^9)~ là độ khó của các kỳ thi sắp tới. 
- Trong ~𝑞~ dòng cuối cùng, dòng thứ ~𝑖~ chứa ba số nguyên ~𝑥_𝑖, 𝑙_𝑖~ và ~𝑟_𝑖~ ~(1 ≤ 𝑙_𝑖 ≤ 𝑟_𝑖 ≤ 𝑛, 0 ≤ |𝑥_𝑖| ≤ 10^9)~ là rating của nick clone MofK sẽ sử dụng, chỉ số của contest đầu tiên và cuối cùng MofK sẽ thi trong kế hoạch thứ ~𝑖~.

## Dữ liệu ra:
- Gồm ~𝑞~ dòng, dòng thứ ~𝑖~ là rating của account MofK sử dụng sau khi thi hết mọi kì thi trong kế hoạch thứ ~𝑖~.

## Giới hạn:
- **Subtask** ~\#1~ ~(15\%\text{ số điểm}): 𝑛, 𝑞 ≤ 5000~
- **Subtask** ~\#2~ ~(20\%\text{ số điểm}): 𝑎_𝑖 ≤ 1000~ và ~𝑥_1 = 𝑥_2 = ⋯ = 𝑥_𝑞 = 10^9~
- **Subtask** ~\#3~ ~(30\%\text{ số điểm}): 𝑎_1 = 𝑎_2 = ⋯ = 𝑎_𝑛~
- **Subtask** ~\#4~ ~(35\%\text{ số điểm}):~ Không có ràng buộc gì thêm. 

## Ví dụ:
#### Dữ liệu vào:
```
1
5 4
1 7 10 20 100
10 1 3
10 3 4
137 1 5
2696 1 5
```

#### Dữ liệu ra:
```
8
20
1
2558
```

#### Giải thích:
- Trong kế hoạch đầu tiên, MofK dự định dùng account có rating ~1~0 để thi ~3~ kỳ thi với độ khó lần lượt là ~1, 7~ và ~10~. Rating của account thay đổi như sau: ~10 → 9 → 2 → 8~.