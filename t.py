def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Extracting number-word pairs
    pairs = [line.strip().split() for line in lines]
    number_word_dict = {int(pair[0]): pair[1] for pair in pairs}

    # Determining the structure of the pyramid
    pyramid_end_numbers = set()
    current, step = 1, 1
    while current in number_word_dict:
        pyramid_end_numbers.add(current)
        step += 1
        current += step

    # Constructing the message
    message_words = [number_word_dict[number] for number in pyramid_end_numbers]
    return ' '.join(message_words)

# Example usage
message = decode('data.txt')
print(message)
