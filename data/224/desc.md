Bé Bi-Bo có ~n~ tấm bìa, trên mỗi tấm bìa có ghi một số nguyên dương trong đoạn ~[1;10^8]~. Bé muốn ghép hai tấm bìa bất kỳ thành một số mới. Như vậy, với ~n~ miếng bìa, Bé có thể ghép thành ~n\text{ div }2~ cặp bìa chứa một số mới. Bé Bi-Bo mới học phép chia hết cho ~3~ nên Bé muốn đếm xem trong số ~n\text{ div }2~ số mới thì có bao nhiêu số chia hết cho ~3~.

**Ví dụ:** Nếu bé có ~2~ tấm bìa ghi ~123~ và ~99~ thì bé có thể ghép thành một trong hai số là ~12399~ và ~99123~.

**Yêu cầu:** Bạn hãy đếm số lượng lớn nhất cặp bìa chứa số chia hết cho ~3~ mà Bé Bi-Bo có thể ghép được.

## Ví dụ:
## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~t~ là số lượng câu hỏi ~t\ (1≤t≤10)~;
- Mỗi câu hỏi có dạng:
	- Dòng đầu chứa số nguyên ~n\ (1≤n≤10^4)~ là số lượng miếng bìa mà Bé Bi-Bo có;
	- Dòng tiếp theo chứa ~n~ số nguyên dương, số thứ ~i~ là số được ghi trên miếng bìa ~i~.

## Dữ liệu ra:
- Ghi ra ~t~ dòng, mỗi dòng một số duy nhất là số lượng lớn nhất số mới chia hết cho ~3~ của câu hỏi tương ứng.

## Ví dụ:
#### Dữ liệu vào:
```
2
3 
123 123 99
6 
1 1 1 23 10 3
```

#### Dữ liệu ra:
```
1
1
```