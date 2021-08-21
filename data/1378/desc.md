**<center>NGUỒN: Đề thi chọn đội tuyển HSGQG - Đà Lạt - Năm 2019-2020</center>**

Với cỗ máy thời gian mà Doremon để lại, Nobita lên kế hoạch đi tìm Doremon. Xét không gian gồm ~n~ thập kỉ, Nobita có thể di chuyển tức thời từ thập kỉ ~𝑖\ (1 ≤ 𝑖 ≤ 𝑛)~ đến thập kỉ ~j\ (1 ≤ 𝑗 ≤ 𝑛)~ với ~|𝑖 − 𝑗| ≤ 𝐶~ trong đó ~C~ là khả năng dịch chuyển của cỗ máy thời gian. Nếu ở thập kỉ ~i~, Nobita sẽ phải ở lại đó ~𝑌_𝑖~ năm.

**Yêu cầu:** Cho ~S~ là thập kỉ hiện tại của Nobita và ~T~ là thập kỉ mà Nobita cần đến ~(1 ≤ 𝑆, 𝑇 ≤ 𝑛)~, hãy tính tổng thời gian tối thiểu để di chuyển từ thập kỉ ~S~ đến thập kỉ ~T~.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên ~𝑛, 𝑄\ (𝑛 ≤ 1000)~;
- Dòng thứ hai là một xâu ~Y~ độ dài ~n~, chỉ gồm các kí tự số từ `0` đến `9`, trong đó ~𝑌_𝑖~ là kí tự số mô tả số năm mà Nobia phải ở lại thập kỉ ~i~;
- ~Q~ dòng sau, mỗi dòng chứa ba số nguyên ~𝑆, 𝑇, 𝐶~.

## Dữ liệu ra:
- Ghi ra ~Q~ dòng, mỗi dòng là câu trả lời cho câu hỏi tương ứng ở dữ liệu vào.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
13131
1 5 2
4 1 2
```

#### Dữ liệu ra:
```
3
5
```

## Giới hạn:
+ Subtask ~\#1: 30\%~ số điểm của bài có ~𝑄 ≤ 10^2~; 
+ Subtask ~\#2: 40\%~ số điểm của bài có ~10^2< 𝑄 ≤ 10^4~; 
+ Subtask ~\#3: 30\%~ số điểm của bài có ~10^4< 𝑄 ≤ 10^5~.