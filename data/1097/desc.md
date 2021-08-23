**<center>NGUỒN: PreVNOI Ⅷ (BẮC NINH 2018)</center>**
<br>

Ở cỗ máy bán kem tự động, mỗi que kem được bán với giá $50 \text{cent}$ và máy chỉ chấp nhận các loại đồng xu $50 \text{cent}$, $1 \text{USD}$ và $2 \text{USD}$ $\left(1 \text{USD} = 100 \text{cent}\right)$. Ban đầu, máy có $M_{50} \text{ xu } 50 \text{cent}, M_1 \text{ xu } 1 \text{USD} \text{ và } M_2 \text{ xu } 2 \text{USD}$. Tiền thối khi trả $1 \text{USD}$ chỉ được trả nếu máy có đồng $50 \text{cent}$. Tiền thối khi trả $2 \text{USD}$ chỉ được trả khi máy có $(a)$ một xu $1 \text{USD}$ và một xu $50 \text{cent}$ hoặc $(b)$ ba xu $50 \text{cent}$. Nếu cả hai trường hợp thỏa mãn, máy luôn chọn phương án $(a)$. Nếu thiếu đồng xu để trả tiền thừa, cỗ máy sẽ không bán kem. Chỗ chứa xu của máy là hữu hạn, nên ở mọi thời điểm, không được có quá $M_{MAX}$ xu ở mỗi mệnh giá trong máy.

Có $N$ học sinh đứng trước cỗ máy, và thầy giáo đi kèm cũng có rất nhiều đồng $50 \text{cent}, 1 \text{USD}, 2 \text{USD}$. Nhiệm vụ của thầy giáo là phát cho mỗi bạn học sinh một đồng xu để mua đúng một que kem, nếu có dư tiền, học sinh sẽ trả cho thầy giáo, học sinh không trao đổi tiền với nhau.

Hãy đếm xem, thầy giáo có bao nhiêu cách phát xu? Hai cách phát được coi là khác nhau nếu tồn tại một học sinh nhận được đồng xu có mệnh giá khác nhau ở hai cách.

## Dữ liệu vào:
- Dòng đầu ghi số $N$ $(1 ≤ N ≤ 300)$ và $M_{MAX}$ $(1 ≤ M_{MAX} ≤ 100000)$.
- Dòng thứ hai ghi ba số nguyên, $M_{50}, M_1 và M_2 \text{ }\left(0 ≤ M_{50}, M_1, M_2 ≤ M_{MAX}\right)$ tương ứng là số lượng các xu mệnh giá $50 \text{cent}, 1 \text{USD}, 2 \text{USD}$ có trong máy lúc ban đầu. 

## Dữ liệu ra:
- In ra số cách phát tiền theo modun $10^9+9$.

## Giới hạn:
- $30\%$ số test có $N ≤ 15, M_{MAX} ≤ 10$
- $35\%$ số test khác có $16 ≤ N ≤ 50$
- $35\%$ số test còn lại không có giới hạn gì thêm.

## Ví dụ:
### Dữ liệu vào:
```
2 2
2 0 0
```

### Dữ liệu ra:
```
3
```

**Giải thích**: $3$ cách trả là $(1, 50), (1, 1), (1, 2)$

### Dữ liệu vào:
```
4 3 
0 0 0
```

### Dữ liệu ra:
```
8
```

**Giải thích:** Có $8$ cách trả là:

- Cách $\#1$: $50, 50, 50, 1$ 
- Cách $\#2$: $50, 50, 50, 2$
- Cách $\#3$: $50, 50, 1, 50$ 
- Cách $\#4$: $50, 50, 1, 1$ 
- Cách $\#5$: $50, 50, 1, 2$ 
- Cách $\#6$: $50, 1, 50, 50$ 
- Cách $\#7$: $50, 1, 50, 1$ 
- Cách $\#8$: $50, 1, 50, 2$ 