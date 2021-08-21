**<center>NGUỒN: PVH PreVOI ONLINE 2020 (13 - 14/12/2019)</center>**
<br>

**Chú ý**: *Những nhân vật và tình tiết dưới đây phỏng theo một tiểu thuyết không có thật trên mạng internet. Mọi sự tương đồng với những cá nhân có thật, nếu có, đều là trùng hợp ngẫu nhiên. Các bạn có thể tham khảo thêm tại [đây](https://www.wattpad.com/269174134-t%C3%ACnh-b%E1%BA%A1n-v%C3%A0-t%C3%ACnh-y%C3%AAu-gi%E1%BB%9Bi-thi%E1%BB%87u-nh%C3%A2n-v%E1%BA%ADt).*

Admin trẻ tuổi nhất của cộng đồng Vinoy  — VLT  — sinh ra trong gia tộc V.L. danh gia vọng tộc đứng thứ ~2~ thế giới chỉ sau gia tộc N.H. Trong truyện, cậu được miêu tả một cách vô cùng hư cấu như sau:

*Ngoại hình : soái ca, vô cùng đẹp trai cao 1 mét 86 đôi mắt hổ phách mái tóc bạch kim*
*Tính cách : lạnh lùng thờ ơ chỉ bên người thân mới ấm áp và rất yêu nó, siêu quậy*
*IQ : ~300/300~ giỏi tất cả các loại võ chuyên về sử dụng súng và chế tạo vũ khí*

Gần đây, VLT vừa khám phá ra một văn tự cổ xưa, nghi rằng có liên quan đến gia tộc V.L. Đáng ngạc nhiên là văn tự này lại được viết bằng bảng chữ cái Latin in thường. Ngay lập tức, VLT bắt tay vào việc giải mã văn tự này. Với IQ ~300/300~ của mình, VLT suy luận rằng manh mối chắc chắn nằm ở một đoạn liên tiếp của văn tự và có liên quan đến tên của một trong các tổ tiên của mình. Tất nhiên,VLT đã có sẵn gia phả bao gồm tên của ~𝑛~ tổ tiên thuộc gia tộc V.L. Như một truyền thống, thành viên thứ 𝑖 gia tộc V.L. được đặt tên giống với tên của một tổ tiên ~𝑥_𝑖~ trước đó, ghép với "tên riêng" là một xâu ~𝑠_𝑖~ không rỗng gồm các chữ cái Latin viết thường. Ví dụ, nếu tổ tiên thứ nhất có tên là `𝑣𝑢𝑜𝑛𝑔`, ~𝑥_2 = 1, 𝑠_2 =~ `𝑙𝑜𝑛𝑔` thì tổ tiên thứ hai sẽ có tên là `𝑣𝑢𝑜𝑛𝑔𝑙𝑜𝑛𝑔`. Tương tự, nếu ~𝑥_3 = 2, 𝑠_3 =~ `𝑡𝑜𝑎𝑛` thì tổ tiên thứ ba sẽ có tên là `𝑣𝑢𝑜𝑛𝑔𝑙𝑜𝑛𝑔𝑡𝑜𝑎𝑛`. 

Vấn đề duy nhất còn lại là VLT không chắc là manh mối nằm ở đoạn nào của văn tự, do đó cậu chọn ra ~𝑞~ đoạn văn, đoạn thứ ~𝑖~ gồm các kí tự thứ từ ~𝑙_𝑖~ tới ~𝑟_𝑖~ của văn tự. Với mỗi đoạn văn, VLT muốn biết số thứ tự của tổ tiên có tên có thứ tự từ điển lớn nhất nhưng không lớn hơn đoạn văn đang xét.

Nhắc lại, xâu ký tự ~𝑠 = 𝑠_1𝑠_2 … 𝑠_𝑚~ có thứ tự từ điển nhỏ hơn xâu ký tự ~𝑡 = 𝑡_1𝑡_2 … 𝑡_𝑛~ khi và chỉ khi một trong hai điều kiện sau được thoả mãn:
 - ~𝑚 < 𝑛~ và ~𝑠_1 = 𝑡_1, 𝑠_2 = 𝑡_2, … , 𝑠_𝑚 = 𝑡_𝑚~. Nói cách khác, ~𝑠~ là một tiền tố thực sự của ~𝑡~. 
- Tồn tại chỉ số ~𝑖~ thoả mãn ~𝑖 < \min(𝑚, 𝑛), 𝑠_1 = 𝑡_1, 𝑠_2 = 𝑡_2, … , 𝑠_𝑖 = 𝑡_𝑖~ và ~𝑠_{𝑖+1} < 𝑡_{𝑖+1}.~

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~T~ ~(1 ≤ T ≤ 4)~ là số thứ tự của subtask chứa test này. 
- Dòng thứ hai chứa xâu ký tự gồm từ ~1~ tới ~5 \times 10^5~ chữ cái in thường thể hiện văn tự cổ xưa mà VLT khám phá được.
- Dòng thứ ba chứa số nguyên ~n~ ~(1 ≤ n ≤ 3 \times 10^5)~ là số tổ tiên thuộc gia tộc V.L.
- Trong ~n~ dòng tiếp theo, dòng thứ ~i~ chứa số nguyên ~x_i~ ~(0 ≤ x_i < i)~ và xâu ký tự ~s_i~ (gồm từ ~1~ tới ~5 \times 10^5~ chữ cái in thường), cho biết tên của thành viên thứ ~i~ trong gia tộc được tạo ra bằng cách ghép tên của thành viên thứ ~x_i~ với tên riêng ~s_i~. Nếu ~x_i = 0~, tên của thành viên thứ ~i~ chính là ~s_i~. Tổng độ dài của các xâu ~s_1, s_2, … , s_n~ không quá ~5 \times 10^5~.
- Dòng tiếp theo chứa số nguyên ~q~ ~(1 ≤ q ≤ 3 \times 10^5)~ là số đoạn văn mà VLT quan tâm.
- Trong ~q~ dòng cuối cùng, dòng thứ ~i~ chứa hai số nguyên ~l_i~ và ~r_i~ ~(1 ≤ l_i ≤ r_i ≤ p)~ với ~p~ là độ dài văn tự cổ, cho biết đoạn văn thứ ~i~ được tạo ra bởi cách lấy các ký tự từ vị trí ~l_i~ tới vị trí ~r_i~ của văn tự cổ. Các ký tự được đánh số từ ~1~.

## Dữ liệu ra:
- Gồm ~𝑞~ dòng, dòng thứ ~𝑖~ chứa một số nguyên duy nhất là số thứ tự của tổ tiên có tên có thứ tự từ điển lớn nhất nhưng không lớn hơn đoạn văn thứ ~𝑖~. Nếu nhiều tổ tiên cùng thoả mãn điều kiện này, in ra số thứ tự của tổ tiên có số thứ tự nhỏ nhất. Nếu không có tổ tiên nào thoả mãn, in ra ~−1~. Các tổ tiên được đánh số từ ~1~ tới ~𝑛~.

## Giới hạn:
- **Subtask** ~\#1~ ~(10\%\text{ số điểm}): 𝑛, 𝑞 ≤ 2000~. Văn tự cổ và tên của mỗi người trong dòng họ có không quá ~2000~ kí tự
- **Subtask** ~\#2~ ~(25\%\text{ số điểm}):~ Tổng độ dài của ~𝑞~ đoạn văn tự cần xét ~(~tổng của các ~𝑟_𝑖 − 𝑙_𝑖 + 1)~ không quá ~10^7~
- **Subtask** ~\#3~ ~(30\%\text{ số điểm}): 𝑥_1 = 𝑥_2 = ⋯ = 𝑥_𝑛 = 0~
- **Subtask** ~\#4~ ~(35\%\text{ số điểm}):~ Không có ràng buộc gì thêm.

## Ví dụ:
#### Dữ liệu vào:
```
2
vuonglongtoanatgmaildotcomorz
6
0 vuong
1 long
2 tu
1 hoang
2 toan
4 long
6
1 13
1 4
1 6
14 26
29 29
1 8
```

#### Dữ liệu ra:
```
5
-1
6
-1
3
6
```

#### Dữ liệu vào:
```
1
aaabcbdaac
6
0 a
1 bc
0 ab
3 c
3 ab
1 ab
6
1 3
3 5
2 2
8 10
10 10
9 10
```

#### Dữ liệu ra:
```
1
2
1
6
2
2
```

#### Giải thích:
Trong ví dụ đầu tiên, ~6~ tổ tiên trong gia tộc lần lượt có tên là `𝑣𝑢𝑜𝑛𝑔`, `𝑣𝑢𝑜𝑛𝑔𝑙𝑜𝑛𝑔`, 
`𝑣𝑢𝑜𝑛𝑔𝑙𝑜𝑛𝑔𝑡𝑢`, `𝑣𝑢𝑜𝑛𝑔ℎ𝑜𝑎𝑛𝑔`, `𝑣𝑢𝑜𝑛𝑔𝑙𝑜𝑛𝑔𝑡𝑜𝑎𝑛`, `𝑣𝑢𝑜𝑛𝑔ℎ𝑜𝑎𝑛𝑔𝑙𝑜𝑛𝑔`. Các tổ tiên sắp xếp theo thứ tự tăng dần của tên là ~(1, 4, 6, 2, 5, 3)~.
- Đoạn văn cần xét thứ nhất là `𝑣𝑢𝑜𝑛𝑔𝑙𝑜𝑛𝑔𝑡𝑜𝑎𝑛`. Tổ tiên số ~5~ trùng với đoạn văn này.
- Đoạn văn cần xét thứ hai là `𝑣𝑢𝑜𝑛`. Tất cả ~6~ tổ tiên có tên có thứ tự từ điển lớn hơn.

Trong ví dụ thứ hai, ~6~ tổ tiên trong gia tộc lần lượt có tên là `𝑎`, `𝑎𝑏𝑐`, `𝑎𝑏`, `𝑎𝑏𝑐`, `𝑎𝑏𝑎𝑏`, `𝑎𝑎𝑏`.
- Đoạn văn thứ hai cần xét là `𝑎𝑏𝑐`. Tổ tiên số ~2~ và số ~4~ đều có tên có thứ tự từ điển lớn nhất không quá đoạn văn. Do đó ~2~ được in ra vì có chỉ số nhỏ hơn.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)